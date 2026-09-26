/* =======================================================================
   1. IDIOMA (español por defecto / inglés)
   ======================================================================= */
const DICC = {
  "Saltar al contenido": "Skip to content",
  "Icono de camión de TrackFlow": "TrackFlow truck icon",
  "TrackFlow, volver a la página principal": "TrackFlow, back to the homepage",
  "Volver": "Back",
  "Formulario de solicitud": "Application form",
  "Cuéntanos cómo": "Tell us how you",
  "mueves tus pedidos": "move your orders",
  "Rellena estos datos y el equipo comercial preparará una propuesta de operación para tu marca. Se tarda unos dos minutos.": "Fill in these details and our sales team will put together an operations proposal for your brand. It takes about two minutes.",
  "Los campos marcados con": "Fields marked with",
  "son obligatorios": "are required",
  "Revisa estos campos": "Please review these fields",

  "Tu empresa": "Your company",
  "Nombre de la empresa": "Company name",
  "Persona de contacto": "Contact person",
  "Nombre y apellido": "First name and last name",
  "Email corporativo": "Work email",
  "Teléfono": "Phone",
  "Con código de país, empezando por +": "With country code, starting with +",
  "Sitio web de la empresa": "Company website",
  "Puedes escribir www.tumarca.com: completamos el https:// por ti": "You can type www.yourbrand.com: we add the https:// for you",
  "(opcional)": "(optional)",

  "Tu operación": "Your operation",
  "País de operación principal": "Main country of operation",
  "Selecciona una opción": "Select an option",
  "Estados Unidos": "United States",
  "España": "Spain",
  "Ambos": "Both",
  "Otro": "Other",
  "Tipo de producto": "Product type",
  "Moda": "Fashion",
  "Electrónica": "Electronics",
  "Cosmética": "Cosmetics",
  "Alimentación": "Food",
  "Volumen mensual estimado de envíos": "Estimated monthly shipping volume",
  "0-100 envíos/mes": "0-100 shipments/month",
  "101-500 envíos/mes": "101-500 shipments/month",
  "501-2000 envíos/mes": "501-2000 shipments/month",
  "Más de 2000 envíos/mes": "More than 2000 shipments/month",
  "No estoy seguro": "Not sure",
  "Para volúmenes menores a 100 envíos mensuales, nuestros servicios podrían no ser la solución más eficiente. ¿Seguro que quieres continuar?": "For volumes under 100 shipments per month, our services may not be the most efficient solution. Are you sure you want to continue?",
  "Sí, quiero continuar con la solicitud": "Yes, I want to continue with my request",
  "Servicios de interés": "Services of interest",
  "(puedes elegir varios)": "(you can choose several)",
  "Almacenaje": "Warehousing",
  "Última milla": "Last mile",
  "Logística inversa": "Reverse logistics",
  "¿Actualmente trabajas con otro 3PL?": "Do you currently work with another 3PL?",
  "Sí": "Yes",
  "No": "No",
  "Estoy evaluando opciones": "I am evaluating options",

  "Detalles": "Details",
  "Comentarios o necesidades específicas": "Comments or specific needs",
  "Plataforma que utilizas, picos de temporada, requisitos de packaging…": "Platform you use, seasonal peaks, packaging requirements…",
  "Acepto la política de privacidad y que TrackFlow trate mis datos para responder a esta solicitud.": "I accept the privacy policy and agree that TrackFlow may process my data to answer this request.",
  "Enviar solicitud": "Send request",
  "Limpiar formulario": "Clear form",
  "Te respondemos en 24-48 horas laborables": "We reply within 24-48 business hours",

  "¡Gracias por tu interés en TrackFlow!": "Thank you for your interest in TrackFlow!",
  "Hemos recibido tu solicitud. Nuestro equipo comercial revisará tu información y te contactará en las próximas 24-48 horas para agendar una llamada y conocer tus necesidades logísticas en detalle.": "We have received your request. Our sales team will review your information and contact you within the next 24-48 hours to schedule a call and get to know your logistics needs in detail.",
  "Si tienes alguna consulta urgente, escríbenos directamente a": "If you have an urgent question, write to us directly at",
  "Volver al inicio": "Back to homepage",

  "Los Ángeles, California (EE. UU.) ·": "Los Angeles, California (USA) ·",
  "Zaragoza, Aragón (España) ·": "Zaragoza, Aragón (Spain) ·",
  "© 2025 TrackFlow. Todos los derechos reservados.": "© 2025 TrackFlow. All rights reserved.",

  "nombre@empresa.com": "name@company.com",
  "https://tumarca.com": "https://yourbrand.com",
  

  "__titulo": "Request information — TrackFlow",
  "__descripcion": "Application form for e-commerce brands looking to outsource their logistics with TrackFlow in the United States and Spain."
};

/* Mensajes dinámicos: los españoles son los exigidos en el enunciado */
const MENSAJES = {
  es: {
    empresa: "El nombre de la empresa debe tener al menos 2 caracteres",
    contacto: "Ingresa nombre y apellido del contacto",
    email: "Ingresa un email corporativo válido (ejemplo: nombre@empresa.com)",
    telefono: "El teléfono debe incluir código de país (ejemplo: +1 213 555 0147)",
    web: "Si incluyes sitio web, debe ser una URL válida",
    pais: "Selecciona el país de operación principal",
    producto: "Selecciona el tipo de producto que manejas",
    volumen: "Selecciona el volumen mensual estimado",
    servicios: "Selecciona al menos un servicio de interés",
    tresPL: "Indica si actualmente trabajas con otro proveedor logístico",
    comentarios: restantes => `Los comentarios no pueden exceder 500 caracteres (quedan ${restantes})`,
    privacidad: "Debes aceptar la política de privacidad para continuar",
    "confirmar-volumen": "Confirma que quieres continuar con este volumen de envíos",
    contador: restantes => `${500 - restantes} / 500`
  },
  en: {
    empresa: "The company name must be at least 2 characters long",
    contacto: "Enter the contact's first name and last name",
    email: "Enter a valid work email (example: name@company.com)",
    telefono: "The phone number must include the country code (example: +1 213 555 0147)",
    web: "If you include a website, it must be a valid URL",
    pais: "Select the main country of operation",
    producto: "Select the type of product you handle",
    volumen: "Select the estimated monthly volume",
    servicios: "Select at least one service of interest",
    tresPL: "Tell us whether you currently work with another logistics provider",
    comentarios: restantes => `Comments cannot exceed 500 characters (${restantes} left)`,
    privacidad: "You must accept the privacy policy to continue",
    "confirmar-volumen": "Confirm that you want to continue with this shipping volume",
    contador: restantes => `${500 - restantes} / 500`
  }
};

const normalizar = texto => texto.replace(/\s+/g, ' ').trim();
const metaDescripcion = document.querySelector('meta[name="description"]');
const TITULO_ES = document.title;
const DESC_ES = metaDescripcion ? metaDescripcion.getAttribute('content') : '';
let idiomaActual = 'es';

const nodosTexto = [];
const recorrido = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(nodo) {
    const padre = nodo.parentElement;
    if (!padre || padre.tagName === 'SCRIPT' || padre.tagName === 'STYLE') return NodeFilter.FILTER_REJECT;
    if (padre.classList.contains('error') || padre.id === 'contador') return NodeFilter.FILTER_REJECT;
    return nodo.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
  }
});
while (recorrido.nextNode()) nodosTexto.push({ nodo: recorrido.currentNode, es: recorrido.currentNode.nodeValue });

const nodosAtributo = [];
document.querySelectorAll('[aria-label], [alt], [placeholder]').forEach(elemento => {
  ['aria-label', 'alt', 'placeholder'].forEach(atributo => {
    const valor = elemento.getAttribute(atributo);
    if (valor) nodosAtributo.push({ elemento, atributo, es: valor });
  });
});

const botonesIdioma = document.querySelectorAll('.btn-idioma');

function aplicarIdioma(idioma) {
  const en = idioma === 'en';

  nodosTexto.forEach(({ nodo, es }) => {
    if (!en) { nodo.nodeValue = es; return; }
    const partes = es.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const traduccion = DICC[normalizar(partes[2])];
    nodo.nodeValue = traduccion ? partes[1] + traduccion + partes[3] : es;
  });

  nodosAtributo.forEach(({ elemento, atributo, es }) => {
    const traduccion = DICC[normalizar(es)];
    elemento.setAttribute(atributo, en && traduccion ? traduccion : es);
  });

  document.documentElement.lang = idioma;
  document.title = en ? DICC.__titulo : TITULO_ES;
  if (metaDescripcion) metaDescripcion.setAttribute('content', en ? DICC.__descripcion : DESC_ES);
  document.querySelectorAll('a[href="index.html"]').forEach(enlace => {
    enlace.setAttribute('href', en ? 'index.html?lang=en' : 'index.html');
  });

  botonesIdioma.forEach(boton => boton.setAttribute('aria-pressed', String(boton.dataset.idioma === idioma)));
  try { localStorage.setItem('trackflow-idioma', idioma); } catch (error) { /* modo privado */ }
  idiomaActual = idioma;

  actualizarContador();
  if (document.querySelector('[aria-invalid="true"]')) validarFormulario(false);
}

botonesIdioma.forEach(boton => boton.addEventListener('click', () => aplicarIdioma(boton.dataset.idioma)));

let idiomaInicial = new URLSearchParams(location.search).get('lang');
if (idiomaInicial !== 'es' && idiomaInicial !== 'en') {
  try { idiomaInicial = localStorage.getItem('trackflow-idioma'); } catch (error) { idiomaInicial = null; }
}
if (idiomaInicial !== 'es' && idiomaInicial !== 'en') {
  idiomaInicial = 'es';   // el español es el idioma por defecto
}

/* =======================================================================
   2. VALIDACIÓN
   ======================================================================= */
const formulario   = document.getElementById('formulario');
const resumen      = document.getElementById('resumen-errores');
const listaErrores = document.getElementById('lista-errores');
const exito        = document.getElementById('exito');
const comentarios  = document.getElementById('comentarios');
const contador     = document.getElementById('contador');
const avisoVolumen = document.getElementById('aviso-volumen');
const confirmarVol = document.getElementById('confirmar-volumen');
const selectVolumen  = document.getElementById('volumen');
const selectProducto = document.getElementById('producto');

const LIMITE_COMENTARIOS = 500;
const texto = clave => MENSAJES[idiomaActual][clave];

/* Si el usuario escribe "www.tumarca.com" o "tumarca.com", le añadimos https://
   El enunciado exige que la URL final empiece por http:// o https:// */
function normalizarWeb() {
  const campo = document.getElementById('web');
  const valor = campo.value.trim();
  if (!valor) { campo.value = ''; return; }
  const tieneProtocolo = /^[a-z][a-z0-9+.-]*:\/\//i.test(valor);
  const pareceDominio = /^[^\s/:]+\.[^\s/:]{2,}/.test(valor);
  campo.value = (!tieneProtocolo && pareceDominio) ? 'https://' + valor : valor;
}

/* Cada regla devuelve true si el campo es válido */
const REGLAS = [
  {
    nombre: 'empresa',
    control: () => document.getElementById('empresa'),
    valida: () => document.getElementById('empresa').value.trim().length >= 2
  },
  {
    nombre: 'contacto',
    control: () => document.getElementById('contacto'),
    valida: () => document.getElementById('contacto').value.trim().split(/\s+/).filter(p => p.length >= 2).length >= 2
  },
  {
    nombre: 'email',
    control: () => document.getElementById('email'),
    valida: () => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(document.getElementById('email').value.trim())
  },
  {
    nombre: 'telefono',
    control: () => document.getElementById('telefono'),
    valida: () => /^\+\d{1,4}[\s.-]?[\d\s().-]{6,}$/.test(document.getElementById('telefono').value.trim())
  },
  {
    nombre: 'web',
    control: () => document.getElementById('web'),
    valida() {
      normalizarWeb();
      const valor = document.getElementById('web').value.trim();
      if (!valor) return true;                                  // opcional
      if (!/^https?:\/\//i.test(valor)) return false;           // debe llevar protocolo
      try {
        const url = new URL(valor);
        const partes = url.hostname.split('.');                 // exige dominio con extensión
        return partes.length >= 2 && partes.every(Boolean) && partes[partes.length - 1].length >= 2;
      } catch (error) { return false; }
    }
  },
  { nombre: 'pais',     control: () => document.getElementById('pais'),     valida: () => document.getElementById('pais').value !== '' },
  { nombre: 'producto', control: () => selectProducto, valida: () => selectProducto.value !== '' },
  { nombre: 'volumen',  control: () => selectVolumen,  valida: () => selectVolumen.value !== '' },
  {
    nombre: 'servicios',
    control: () => formulario.querySelector('input[name="servicios"]'),
    valida: () => formulario.querySelectorAll('input[name="servicios"]:checked').length > 0
  },
  {
    nombre: 'tresPL',
    control: () => formulario.querySelector('input[name="tresPL"]'),
    valida: () => formulario.querySelectorAll('input[name="tresPL"]:checked').length > 0
  },
  {
    nombre: 'comentarios',
    control: () => comentarios,
    valida: () => comentarios.value.length <= LIMITE_COMENTARIOS,
    argumento: () => Math.max(0, LIMITE_COMENTARIOS - comentarios.value.length)
  },
  {
    nombre: 'confirmar-volumen',
    control: () => confirmarVol,
    aplica: () => !avisoVolumen.hidden,
    valida: () => confirmarVol.checked
  },
  {
    nombre: 'privacidad',
    control: () => document.getElementById('privacidad'),
    valida: () => document.getElementById('privacidad').checked
  }
];

function pintarError(regla, mensaje) {
  const parrafo = document.getElementById('error-' + regla.nombre);
  const control = regla.control();
  if (parrafo) parrafo.textContent = mensaje || '';
  if (control) {
    if (mensaje) control.setAttribute('aria-invalid', 'true');
    else control.removeAttribute('aria-invalid');
  }

  // El resumen de arriba se mantiene al día mientras se corrigen campos
  const linea = document.getElementById('resumen-' + regla.nombre);
  if (linea && !mensaje) {
    linea.remove();
    if (!listaErrores.children.length) resumen.hidden = true;
  } else if (linea) {
    linea.querySelector('a').textContent = mensaje;
  }
}

function validarFormulario(mostrarResumen) {
  const fallos = [];

  REGLAS.forEach(regla => {
    if (regla.aplica && !regla.aplica()) { pintarError(regla, ''); return; }

    if (regla.valida()) {
      pintarError(regla, '');
    } else {
      const plantilla = texto(regla.nombre);
      const mensaje = typeof plantilla === 'function' ? plantilla(regla.argumento ? regla.argumento() : 0) : plantilla;
      pintarError(regla, mensaje);
      fallos.push({ regla, mensaje });
    }
  });

  if (mostrarResumen && fallos.length) {
    listaErrores.innerHTML = '';
    fallos.forEach(({ regla, mensaje }) => {
      const item = document.createElement('li');
      item.id = 'resumen-' + regla.nombre;
      const enlace = document.createElement('a');
      enlace.href = '#' + (regla.control() ? regla.control().id : '');
      enlace.className = 'text-alerta underline underline-offset-4 hover:text-senal';
      enlace.textContent = mensaje;
      enlace.addEventListener('click', evento => {
        evento.preventDefault();
        const control = regla.control();
        if (control) control.focus();
      });
      item.appendChild(enlace);
      listaErrores.appendChild(item);
    });
    resumen.hidden = false;
    resumen.focus();
  } else if (!fallos.length) {
    resumen.hidden = true;
  }

  return fallos.length === 0;
}

/* Contador de caracteres */
function actualizarContador() {
  const restantes = LIMITE_COMENTARIOS - comentarios.value.length;
  contador.textContent = texto('contador')(restantes);
  contador.className = restantes < 0
    ? 'mt-2 font-mono text-xs text-alerta'
    : 'mt-2 font-mono text-xs text-gris';
}
comentarios.addEventListener('input', () => {
  actualizarContador();
  if (comentarios.getAttribute('aria-invalid') === 'true' || comentarios.value.length > LIMITE_COMENTARIOS) {
    const regla = REGLAS.find(r => r.nombre === 'comentarios');
    pintarError(regla, regla.valida() ? '' : texto('comentarios')(regla.argumento()));
  }
});

/* Aviso de volumen bajo: 0-100 envíos + tipo de producto elegido */
function revisarVolumen() {
  const bajo = selectVolumen.value === '0-100' && selectProducto.value !== '';
  avisoVolumen.hidden = !bajo;
  if (!bajo) {
    confirmarVol.checked = false;
    pintarError(REGLAS.find(r => r.nombre === 'confirmar-volumen'), '');
  }
}
selectVolumen.addEventListener('change', revisarVolumen);
selectProducto.addEventListener('change', revisarVolumen);

/* Validación al salir de cada campo, sin molestar mientras se escribe */
REGLAS.forEach(regla => {
  const control = regla.control();
  if (!control) return;
  const evento = (control.type === 'checkbox' || control.type === 'radio' || control.tagName === 'SELECT') ? 'change' : 'blur';
  const grupo = formulario.querySelectorAll('[name="' + control.name + '"]');
  grupo.forEach(elemento => elemento.addEventListener(evento, () => {
    if (regla.aplica && !regla.aplica()) return;
    const plantilla = texto(regla.nombre);
    const mensaje = typeof plantilla === 'function' ? plantilla(regla.argumento ? regla.argumento() : 0) : plantilla;
    pintarError(regla, regla.valida() ? '' : mensaje);
  }));
});

/* Envío simulado */
formulario.addEventListener('submit', evento => {
  evento.preventDefault();
  if (!validarFormulario(true)) return;

  const datos = Object.fromEntries(new FormData(formulario).entries());
  datos.servicios = [...formulario.querySelectorAll('input[name="servicios"]:checked')].map(s => s.value);
  console.log('[TrackFlow] Solicitud lista para enviar:', datos);

  formulario.hidden = true;
  resumen.hidden = true;
  exito.hidden = false;
  exito.focus();
  if (exito.scrollIntoView) exito.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* Limpiar formulario: el reset nativo solo vacía los campos, el resto lo devolvemos a cero aquí */
formulario.addEventListener('reset', () => {
  requestAnimationFrame(() => {
    REGLAS.forEach(regla => pintarError(regla, ''));
    listaErrores.innerHTML = '';
    resumen.hidden = true;
    avisoVolumen.hidden = true;
    confirmarVol.checked = false;
    actualizarContador();
    document.getElementById('empresa').focus();
  });
});

/* Arranque */
aplicarIdioma(idiomaInicial);
actualizarContador();
