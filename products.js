const GOC_WHATSAPP="525543674491";
const productos=[
{name:"Jabón líquido para ropa de color",categoria:"ropa",label:"Cuidado de la ropa",presentaciones:["1 L","5 L"],imagen:"rubro-lavanderia.PNG",acento:"blue"},
{name:"Jabón líquido para ropa blanca",categoria:"ropa",label:"Cuidado de la ropa",presentaciones:["1 L","5 L"],imagen:"rubro-lavanderia.PNG",acento:"blue"},
{name:"Suavizante para telas",categoria:"ropa",label:"Cuidado de la ropa",presentaciones:["1 L","5 L"],imagen:"rubro-lavanderia.PNG",acento:"blue"},
{name:"Jabón para manos humectante",categoria:"higiene",label:"Higiene",presentaciones:["1 L","5 L"],imagen:"rubro-hogar.PNG",acento:"purple"},
{name:"Lavatrastes olor a limón",categoria:"hogar",label:"Limpieza del hogar",presentaciones:["1 L","5 L"],imagen:"rubro-cocina.PNG",acento:"green"},
{name:"Limpiador multiusos olor a lavanda",categoria:"hogar",label:"Limpieza del hogar",presentaciones:["1 L","5 L"],imagen:"rubro-hogar.PNG",acento:"purple"},
{name:"Limpiador multiusos con aceite de pino",categoria:"hogar",label:"Limpieza del hogar",presentaciones:["1 L","5 L"],imagen:"rubro-hogar.PNG",acento:"green"},
{name:"Cloro en gel",categoria:"hogar",label:"Limpieza del hogar",presentaciones:["1 L","5 L"],imagen:"rubro-hogar.PNG",acento:"green"},
{name:"Desengrasante multiusos",categoria:"hogar",label:"Limpieza del hogar",presentaciones:["1 L","5 L"],imagen:"rubro-cocina.PNG",acento:"green"},
{name:"Desengrasante industrial",categoria:"profesional",label:"Limpieza profesional",presentaciones:["1 L","5 L"],imagen:"rubro-hosteleria.PNG",acento:"professional"},
{name:"Shampoo para autos",categoria:"automotriz",label:"Cuidado automotriz",presentaciones:["1 L","5 L"],imagen:"rubro-automotriz.PNG",acento:"auto"},
{name:"Shampoo para autos con cera",categoria:"automotriz",label:"Cuidado automotriz",presentaciones:["1 L","5 L"],imagen:"rubro-automotriz.PNG",acento:"auto"},
{name:"Hidratador para tableros y puertas",categoria:"automotriz",label:"Cuidado automotriz",presentaciones:["1 L","5 L"],imagen:"rubro-automotriz.PNG",acento:"auto"},
{name:"Abrillantador de llantas",categoria:"automotriz",label:"Cuidado automotriz",presentaciones:["1 L","5 L"],imagen:"rubro-automotriz.PNG",acento:"auto"},
{name:"Jabón líquido negro",categoria:"ropa",label:"Cuidado de la ropa",presentaciones:["1 L","5 L"],imagen:"rubro-lavanderia.PNG",acento:"black",nota:"Opción disponible por ahora."}
];

function whatsappLink(nombre){
  const mensaje=`Hola GOC, me interesa el ${nombre}. ¿Me pueden dar información?`;
  return `https://wa.me/${GOC_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}
function renderProductos(filtro="todos"){
  const grid=document.querySelector("#catalog-grid");
  if(!grid)return;
  const lista=filtro==="todos"?productos:productos.filter(p=>p.categoria===filtro);
  document.querySelector("#product-count").textContent=`${lista.length} ${lista.length===1?"producto":"productos"}`;
  grid.innerHTML=lista.map((p,i)=>`
    <article class="catalog-product-card product-accent-${p.acento}">
      <div class="catalog-product-media">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
        <span class="product-index">${String(productos.indexOf(p)+1).padStart(2,"0")}</span>
      </div>
      <div class="catalog-product-content">
        <p class="product-category">${p.label}</p>
        <h2>${p.nombre}</h2>
        <div class="presentation-list">${p.presentaciones.map(x=>`<span>${x}</span>`).join("")}</div>
        ${p.nota?`<p class="product-note">${p.nota}</p>`:""}
        <a class="product-question" href="${whatsappLink(p.nombre)}" target="_blank" rel="noopener noreferrer">Preguntar por este producto <span>→</span></a>
      </div>
    </article>
  `).join("");
}
document.addEventListener("DOMContentLoaded",()=>{
  renderProductos();
  document.querySelectorAll(".category-tab").forEach(tab=>tab.addEventListener("click",()=>{
    document.querySelectorAll(".category-tab").forEach(t=>{t.classList.remove("active");t.setAttribute("aria-selected","false")});
    tab.classList.add("active");tab.setAttribute("aria-selected","true");
    renderProductos(tab.dataset.category);
  }));
  const params=new URLSearchParams(location.search);
  const categoria=params.get("categoria");
  if(categoria){
    const tab=document.querySelector(`.category-tab[data-category="${categoria}"]`);
    if(tab)tab.click();
  }
});