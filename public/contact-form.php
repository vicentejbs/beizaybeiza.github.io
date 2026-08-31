<?php
// ========================================
// CONFIGURACIÓN DE DEBUGGING
// ========================================
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Log de errores
$logFile = __DIR__ . '/form-log.txt';

function logMessage($message)
{
    global $logFile;
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND);
}

logMessage("=== Nueva petición recibida ===");
logMessage("Método: " . $_SERVER['REQUEST_METHOD']);

// Configuración de CORS para permitir peticiones desde el frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Manejar preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    logMessage("Petición OPTIONS - respondiendo OK");
    http_response_code(200);
    exit();
}

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    logMessage("ERROR: Método no permitido - " . $_SERVER['REQUEST_METHOD']);
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit();
}

// Obtener datos del formulario
$input = file_get_contents('php://input');
logMessage("Input recibido: " . $input);

$data = json_decode($input, true);

// Si no viene como JSON, intentar obtener de POST normal
if (!$data) {
    $data = $_POST;
    logMessage("Usando POST normal en lugar de JSON");
}

logMessage("Datos parseados: " . print_r($data, true));

// Validar campos requeridos
$nombre = isset($data['nombre']) ? trim($data['nombre']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$telefono = isset($data['telefono']) ? trim($data['telefono']) : 'No proporcionado';
$servicio = isset($data['servicio']) ? trim($data['servicio']) : 'No especificado';
$mensaje = isset($data['mensaje']) ? trim($data['mensaje']) : '';

logMessage("Nombre: $nombre, Email: $email, Teléfono: $telefono, Servicio: $servicio");

// Validación
if (empty($nombre) || empty($email) || empty($mensaje)) {
    logMessage("ERROR: Campos requeridos vacíos");
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Por favor complete todos los campos requeridos']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    logMessage("ERROR: Email inválido - $email");
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'El email proporcionado no es válido']);
    exit();
}

// Mapear valores de servicio a nombres legibles
$servicios = [
    'electrico' => 'Instalaciones Eléctricas',
    'gas' => 'Proyectos de Gas',
    'certificacion' => 'Certificaciones SEC',
    'mantenimiento' => 'Mantenimiento',
    'auditoria' => 'Auditoría Técnica',
    'otro' => 'Otro'
];
$servicioNombre = isset($servicios[$servicio]) ? $servicios[$servicio] : $servicio;

// Configurar email
$destinatarios = 'diegobeizas@beizaybeiza.cl, ebeizah@beizaybeiza.cl';
$asunto = "Nueva consulta desde BeizayBeiza.cl - $servicioNombre";

logMessage("Destinatarios: $destinatarios");
logMessage("Asunto: $asunto");

// Crear cuerpo del email en HTML
$cuerpoHTML = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f97316, #ea580c); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border: 1px solid #e5e7eb; }
        .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2 style='margin:0;'>Nueva Consulta Web</h2>
            <p style='margin:5px 0 0 0;'>Formulario de contacto - BeizayBeiza.cl</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Nombre:</div>
                <div class='value'>$nombre</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'><a href='mailto:$email'>$email</a></div>
            </div>
            <div class='field'>
                <div class='label'>Telefono:</div>
                <div class='value'>$telefono</div>
            </div>
            <div class='field'>
                <div class='label'>Servicio de interes:</div>
                <div class='value'>$servicioNombre</div>
            </div>
            <div class='field'>
                <div class='label'>Mensaje:</div>
                <div class='value'>" . nl2br(htmlspecialchars($mensaje)) . "</div>
            </div>
        </div>
        <div class='footer'>
            Este mensaje fue enviado desde el formulario de contacto de BeizayBeiza.cl<br>
            Fecha: " . date('d/m/Y H:i:s') . "
        </div>
    </div>
</body>
</html>
";

// Headers del email
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Formulario Web <contacto@beizaybeiza.cl>\r\n";
$headers .= "Reply-To: $nombre <$email>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

logMessage("Intentando enviar email...");

// Enviar email
$enviado = mail($destinatarios, $asunto, $cuerpoHTML, $headers);

if ($enviado) {
    logMessage("SUCCESS: Email enviado correctamente");
    echo json_encode([
        'success' => true,
        'message' => '¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.'
    ]);
} else {
    $error = error_get_last();
    logMessage("ERROR: Fallo al enviar email. Error: " . print_r($error, true));
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error al enviar el mensaje. Por favor intente nuevamente o contactenos por WhatsApp.'
    ]);
}

logMessage("=== Fin de petición ===\n");
?>