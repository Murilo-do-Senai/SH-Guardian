let estadoIoT = {
  dispositivo: "sensor-001",
  temperatura: null,
  umidade: null,
  ventilador: false,
  modo: "automatico",
  ultimaLeitura: null
};

export function receberLeitura(req, res) {
  const { dispositivo, temperatura, umidade } = req.body;

  if (
    typeof temperatura !== "number" ||
    typeof umidade !== "number" ||
    !Number.isFinite(temperatura) ||
    !Number.isFinite(umidade) ||
    temperatura < -50 ||
    temperatura > 100 ||
    umidade < 0 ||
    umidade > 100
  ) {
    return res.status(400).json({
      ok: false,
      mensagem: "Temperatura ou umidade inválida."
    });
  }

  estadoIoT.temperatura = temperatura;
  estadoIoT.umidade = umidade;
  estadoIoT.dispositivo = dispositivo || "sensor-001";
  estadoIoT.ultimaLeitura = new Date().toISOString();

  if (estadoIoT.modo === "automatico") {
    estadoIoT.ventilador = temperatura >= 30;
  }

  console.log("Leitura IoT:", estadoIoT);

  return res.json({
    ok: true,
    dados: estadoIoT
  });
}

export function consultarEstado(req, res) {
  return res.json({
    ok: true,
    dados: estadoIoT
  });
}

export function controlarVentilador(req, res) {
  const { ligado } = req.body;

  if (typeof ligado !== "boolean") {
    return res.status(400).json({
      ok: false,
      mensagem: 'Informe "ligado" como true ou false.'
    });
  }

  estadoIoT.modo = "manual";
  estadoIoT.ventilador = ligado;

  return res.json({
    ok: true,
    dados: estadoIoT
  });
}

export function ativarModoAutomatico(req, res) {
  estadoIoT.modo = "automatico";

  if (estadoIoT.temperatura !== null) {
    estadoIoT.ventilador = estadoIoT.temperatura >= 30;
  }

  return res.json({
    ok: true,
    dados: estadoIoT
  });
}