function parseUplink(device, payload)
{
    // Se convierte el "payload" en un objeto JSON y se guarda en la variable "rfi_iotdata".
    var datos = payload.asJsonObject();
    
    // Se registra el objeto "rfi_iotdata" en los registros del dispositivo de IoT.
    env.log(datos);
        // Temperatura
    var emic_temp = device.endpoints.byType(endpointType.temperatureSensor);
    if (emic_temp != null)
    {
        emic_temp.updateTemperatureSensorStatus(datos.temperatura_EMIC);
    }
        // CO2
    var emic_CO2 = device.endpoints.byType(endpointType.PpmConcentrationSensor, ppmConcentrationSensorSubType.CarbonDioxide);
    if (emic_CO2 != null)
    {
        emic_CO2.updatePpmConcentrationSensorStatus(datos.ppm_CO2_EMIC);
    }

        // GPS
    var emic_GPS = device.endpoints.byType(endpointType.locationTracker);
    if (emic_GPS != null)
    {
        emic_GPS.updateLocationTrackerStatus(datos.latitud, datos.longitud, 123);
        //emic_GPS.updateDeviceGeolocation(45.4052, -3.87699);
    }

}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// Esta función permite convertir un comando de la plataforma en un
	// payload que pueda enviarse al dispositivo.
	// Más información en https://wiki.cloud.studio/page/200

	// Los parámetros de esta función, son:
	// - device: objeto representando el dispositivo al cual se enviará el comando.
	// - endpoint: objeto endpoint representando el endpoint al que se enviará el 
	//   comando. Puede ser null si el comando se envía al dispositivo, y no a 
	//   un endpoint individual dentro del dispositivo.
	// - command: objeto que contiene el comando que se debe enviar. Más
	//   información en https://wiki.cloud.studio/page/1195.

	// Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
	// endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
	// Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
	// de operación.

/*
	 payload.port = 25; 	 	 // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // El comando 30 indica "encender" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // El comando 31 indica "apagar" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // El comando 32 indica "alternar" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}