// Data - Bahasa Malaysia (BM) - TikTok 15 dari fnbsocmed.onrender.com (WEDRINK)
const tiktokAccounts = [
  { name: "WeDrink Bongawan", handle: "@wedrink.bongawan", url: "https://www.tiktok.com/@wedrink.bongawan", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/5440fd6e377d90b66a26415870057509~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=d33401a8&x-expires=1788483600&x-signature=DaEXPr5daLsB53oXoouqMKOau5U%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" },
  { name: "WeDrink Indah Per3", handle: "@wedrink.indah.per3", url: "https://www.tiktok.com/@wedrink.indah.per3", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/bf111eec06999dec51b2bbc0fd4a5330~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=f5534c6c&x-expires=1788483600&x-signature=21LuJAoel5CszIqGMxkKS9jz9Ao%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" },
  { name: "WEDRINK KINABATANGAN", handle: "@wedrink.kinabatan", url: "https://www.tiktok.com/@wedrink.kinabatan", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/6c67581530585331d8621c4e09e90531~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=90938ab4&x-expires=1788483600&x-signature=G9EOztNM1aOMaHxpUobgktS5E%2FE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2" },
  { name: "wedrink kotabelud", handle: "@wedrink.kotabelud", url: "https://www.tiktok.com/@wedrink.kotabelud", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/5bbab3aa8df0dc850c8bd6a675168c85~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=4b8a01bc&x-expires=1788483600&x-signature=3AZc%2F%2BnBkYAqbwGk8FXO4Z%2B1NL8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" },
  { name: "WeDrink Kudat", handle: "@wedrink.kudat", url: "https://www.tiktok.com/@wedrink.kudat", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/671dd6e20373670005a9a675431fafbf~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=187493a2&x-expires=1788483600&x-signature=xR4Kp5dZ5sEyQ35TtovhxTGWiAY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2" },
  { name: "Wedrink Likas Plaza", handle: "@wedrink.likas.plaza", url: "https://www.tiktok.com/@wedrink.likas.plaza", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/40e45495b97cf3b5c77d619b327fcf6c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=e76c66f2&x-expires=1788483600&x-signature=BkE1PV3EdfCw46U3UUIc6iWUtNg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" },
  { name: "WEDRINK PLAZA PCB", handle: "@wedrink.plaza.pcb", url: "https://www.tiktok.com/@wedrink.plaza.pcb", avatar: "https://p19-common-sign.tiktokcdn.com/tos-alisg-avt-0068/0b0b456bfb802250fab3f97f9cfb304a~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=7a0044ba&x-expires=1788483600&x-signature=RN2JiVIJX7yCtiFLDoFzZF7GLx0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" },
  { name: "Wedrink Tambunan", handle: "@wedrink.tambunan", url: "https://www.tiktok.com/@wedrink.tambunan", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/2b3cc21e349b2f18406140d407cf9fe3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=56c9c4db&x-expires=1788483600&x-signature=hw0aNLCTfXfg1dKDumc1SA0N3jA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" },
  { name: "Wedrink Tenom", handle: "@wedrink.tenom", url: "https://www.tiktok.com/@wedrink.tenom", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/c3863939894f9130e2526d20a8b4660e~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=1cf47922&x-expires=1788483600&x-signature=3yQAm402tUb34kSR7quK76j5OtI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" },
  { name: "Wedrink Takada tawau", handle: "@wedrink_takadatawau", url: "https://www.tiktok.com/@wedrink_takadatawau", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/f0cdb6819245517b08e11c2a2d1b9bba~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=bb2c7470&x-expires=1788483600&x-signature=TWhOAHBmLYIoVcIXADldb18b%2BlQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2" },
  { name: "Wedrinkbandarlabuan", handle: "@wedrinkbandarlabu", url: "https://www.tiktok.com/@wedrinkbandarlabu", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/1e535f1a68d69c3f12bc81379bf7a15f~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=c6a84467&x-expires=1788483600&x-signature=oyaa0dOS3iQP0LFs2F61Fpg2dEg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" },
  { name: "WeDrink CKS Tuaran", handle: "@wedrinkckstuaran", url: "https://www.tiktok.com/@wedrinkckstuaran", avatar: "https://p19-common-sign.tiktokcdn.com/tos-alisg-avt-0068/c52eddb0abef77b3d027982dd287a966~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=9f42ed94&x-expires=1788483600&x-signature=ykNY8PONne4fuv2JI7ekglBrH5E%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" },
  { name: "Wedrink Pekan Inanam", handle: "@wedrinkpekaninanam", url: "https://www.tiktok.com/@wedrinkpekaninanam", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/bd521d792f36ee646f864de6bf3b3eb1~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=d605ec59&x-expires=1788483600&x-signature=Xs4C%2F93XF8OEV3mEYcdAPI2bjUs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2" },
  { name: "WeDrink Pekan Ranau", handle: "@wedrinkranau", url: "https://www.tiktok.com/@wedrinkranau", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/0626b12284862a81042e8a6efb4c3bf9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=8439f335&x-expires=1788483600&x-signature=jYvaszJbplD0bNWMIlMQxUq0N88%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2" },
  { name: "wedrinksipitangwalk", handle: "@wedrinksipitangwalk", url: "https://www.tiktok.com/@wedrinksipitangwalk", avatar: "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/fb28170bd7739c1d7f636cdf91d96ddc~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=0d1843f3&x-expires=1788483600&x-signature=EAKIqQlHRVvkz%2B0bWF%2FwzBC1Uac%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" },
]
const instagramAccounts = [
  { name: "WeDrink 4 Brothers", handle: "@wedrink.4brothers", url: "https://www.instagram.com/wedrink.4brothers/" },
]

function highlightText(text, query){
  if(!query) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  return text.replace(regex, '<span class="highlight">$1</span>')
}
function renderGrid(elId, accounts, type, query=""){
  const grid = document.getElementById(elId)
  if(accounts.length === 0){
    grid.innerHTML = `<div class="no-result">Tiada akaun dengan kata "<strong>${query}</strong>" 😿<br><span style="font-size:11px;opacity:0.7">Cuba kata kunci lain</span></div>`
    return
  }
  grid.innerHTML = accounts.map((a)=>{
    const init = a.name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase()
    const avaClass = type==="tt" ? "tt" : "ig"
    const avatarHtml = a.avatar ? `<img src="${a.avatar}" alt="${a.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:white">${init}</span>` : init
    const bgStyle = a.avatar ? 'padding:0;overflow:hidden;background:white;border:1px solid #E6FFFB' : ''
    return `<a class="account" href="${a.url}" target="_blank" rel="noopener">
      <div class="acc-avatar ${avaClass}" style="${bgStyle}">${avatarHtml}</div>
      <div class="acc-info">
        <div class="acc-name">${highlightText(a.name, query)}</div>
        <div class="acc-handle">${highlightText(a.handle, query)}</div>
      </div>
      <div class="acc-go">↗</div>
    </a>`
  }).join("")
}
renderGrid("gridTiktok", tiktokAccounts, "tt")
renderGrid("gridInstagram", instagramAccounts, "ig")

function setupSearch(inputId, clearId, countId, gridId, sourceAccounts, type){
  const input = document.getElementById(inputId)
  const clear = document.getElementById(clearId)
  const count = document.getElementById(countId)
  function doSearch(){
    const q = input.value.trim().toLowerCase()
    if(q){
      clear.classList.add("visible")
      const filtered = sourceAccounts.filter(a => a.name.toLowerCase().includes(q) || a.handle.toLowerCase().includes(q))
      renderGrid(gridId, filtered, type, input.value.trim())
      count.textContent = `${filtered.length} hasil untuk "${input.value.trim()}"`
      count.classList.add("has-query")
    } else {
      clear.classList.remove("visible")
      count.textContent = ""
      count.classList.remove("has-query")
      renderGrid(gridId, sourceAccounts, type, "")
    }
  }
  input.addEventListener("input", doSearch)
  clear.addEventListener("click", ()=>{ input.value=""; input.focus(); doSearch() })
}
setupSearch("searchTiktok", "clearTiktok", "countTiktok", "gridTiktok", tiktokAccounts, "tt")
setupSearch("searchInstagram", "clearInstagram", "countInstagram", "gridInstagram", instagramAccounts, "ig")

function openModal(id){
  document.getElementById(id).classList.add("open")
  document.body.style.overflow="hidden"
  setTimeout(()=>{ const s=document.querySelector(`#${id} .search-input`); if(s) s.focus() },150)
}
function closeModal(id){ document.getElementById(id).classList.remove("open"); document.body.style.overflow="" }
document.getElementById("btnTiktok").addEventListener("click", ()=> openModal("modalTiktok"))
document.getElementById("btnInstagram").addEventListener("click", ()=> openModal("modalInstagram"))
document.querySelectorAll(".modal-backdrop, [data-close]").forEach(el=>{
  el.addEventListener("click", ()=>{
    const id = el.getAttribute("data-close") || el.parentElement.id
    if(el.classList.contains("modal-backdrop")) closeModal(el.parentElement.id)
    else closeModal(id)
  })
})
document.addEventListener("keydown", e=>{
  if(e.key==="Escape"){closeModal("modalTiktok");closeModal("modalInstagram")}
  if(e.key==="Escape" && e.target.classList.contains("search-input")){ e.target.value=""; e.target.dispatchEvent(new Event("input")) }
})

// ===== BG MUSIC LOOP - AUTO PLAY LANGSUNG ADA SUARA =====
const bgMusic = document.getElementById("bgMusic")
const musicToggle = document.getElementById("musicToggle")
let isMusicPlaying = false
let hideTimer = null

function showMusicBtn(){
  musicToggle.classList.add("show")
  clearTimeout(hideTimer)
  hideTimer = setTimeout(()=> musicToggle.classList.remove("show"), 3000)
}
function hideMusicBtn(){
  clearTimeout(hideTimer)
  musicToggle.classList.remove("show")
}

if(bgMusic){
  bgMusic.volume = 0.65
  bgMusic.loop = true
  bgMusic.muted = false

  function updateMusicUI(){
    if(isMusicPlaying){
      musicToggle.textContent = "🎵"
      musicToggle.classList.add("playing")
      musicToggle.classList.remove("muted")
      musicToggle.title = "Klik untuk hentikan muzik"
      showMusicBtn()
    } else {
      musicToggle.textContent = "🔇"
      musicToggle.classList.remove("playing")
      musicToggle.classList.add("muted")
      musicToggle.classList.add("show")
    }
  }

  async function tryPlayMusic(){
    try{
      bgMusic.muted = false
      await bgMusic.play()
      isMusicPlaying = true
      updateMusicUI()
      return true
    } catch(e){
      isMusicPlaying = false
      updateMusicUI()
      return false
    }
  }

  // Langsung coba play saat load - tanpa nunggu DOMContentLoaded lama
  tryPlayMusic()
  // Coba lagi setelah 300ms & 800ms (handle slow load)
  setTimeout(tryPlayMusic, 300)
  setTimeout(tryPlayMusic, 800)

  // Auto-play pada interaksi APAPUN - biar langsung ada suara pas akses
  const anyInteract = ["click","touchstart","mousemove","scroll","keydown","pointerdown"]
  let hasPlayed = false
  async function handleAnyInteract(){
    if(hasPlayed && isMusicPlaying) return
    const ok = await tryPlayMusic()
    if(ok){
      hasPlayed = true
      anyInteract.forEach(ev=> document.removeEventListener(ev, handleAnyInteract))
      document.removeEventListener("scroll", handleAnyInteract)
    }
  }
  anyInteract.forEach(ev=> document.addEventListener(ev, handleAnyInteract, {passive:true}))
  document.addEventListener("scroll", handleAnyInteract, {passive:true})

  // Toggle manual - klik tahan muncul
  musicToggle.addEventListener("click", async (e)=>{
    e.stopPropagation()
    if(isMusicPlaying){
      bgMusic.pause()
      isMusicPlaying = false
      updateMusicUI()
    } else {
      await tryPlayMusic()
    }
  })
  // Hover biar muncul lagi walau auto-hide
  musicToggle.addEventListener("mouseenter", showMusicBtn)
  document.addEventListener("mousemove", (e)=>{
    if(e.clientX > window.innerWidth - 80 && e.clientY < 80) showMusicBtn()
  })

  // Init: jangan tampil mute lama, coba langsung show playing
  updateMusicUI()
  // Kalau autoplay sukses, auto-hide setelah 3 detik
  setTimeout(()=>{ if(isMusicPlaying) hideMusicBtn() }, 3500)
}

// Meow sound
let audioCtx
function playMeow(){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    if(audioCtx.state==="suspended") audioCtx.resume()
    const now = audioCtx.currentTime
    ;[0, 0.18].forEach((off)=>{
      const osc = audioCtx.createOscillator()
      const gain = audioCtx.createGain()
      const filter = audioCtx.createBiquadFilter()
      filter.type="lowpass"; filter.frequency.value=2200
      osc.type="sine"
      osc.frequency.setValueAtTime(620, now+off)
      osc.frequency.exponentialRampToValueAtTime(340, now+off+0.22)
      osc.frequency.exponentialRampToValueAtTime(520, now+off+0.32)
      gain.gain.setValueAtTime(0, now+off)
      gain.gain.linearRampToValueAtTime(0.28, now+off+0.02)
      gain.gain.exponentialRampToValueAtTime(0.001, now+off+0.38)
      osc.connect(filter); filter.connect(gain); gain.connect(audioCtx.destination)
      osc.start(now+off); osc.stop(now+off+0.4)
    })
    const osc2 = audioCtx.createOscillator()
    const g2 = audioCtx.createGain()
    osc2.frequency.value=85
    g2.gain.setValueAtTime(0.08, now)
    g2.gain.exponentialRampToValueAtTime(0.001, now+0.35)
    osc2.connect(g2); g2.connect(audioCtx.destination)
    osc2.start(now); osc2.stop(now+0.35)
  }catch(e){console.log(e)}
  const b = document.getElementById("soundBadge")
  b.classList.add("show")
  setTimeout(()=> b.classList.remove("show"), 1200)
  const cat = document.querySelector(".cat")
  cat.style.animation="none"; void cat.offsetWidth; cat.style.animation="bobFluid 3.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite"
  document.querySelector(".arm-wave").style.animation="none"; void document.querySelector(".arm-wave").offsetWidth; document.querySelector(".arm-wave").style.animation="waveFluid 0.7s cubic-bezier(0.37, 0, 0.63, 1) 3"
  setTimeout(()=>{ document.querySelector(".arm-wave").style.animation="waveFluid 1.8s cubic-bezier(0.37, 0, 0.63, 1) infinite" }, 2100)
}
document.getElementById("mascotWrap").addEventListener("click", playMeow)
setTimeout(()=>{ try{ playMeow(); }catch(e){} }, 1400)

document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelector(".glass-card").animate(
    [{opacity:0, transform:"translateY(18px) scale(0.98)"},{opacity:1, transform:"translateY(0) scale(1)"}],
    {duration:600, easing:"cubic-bezier(0.16,1,0.3,1)", fill:"both"}
  )
})

window.updateLinks = (ttLinks, igLinks)=>{
  if(ttLinks) ttLinks.forEach((url,i)=>{ if(tiktokAccounts[i]) tiktokAccounts[i].url=url })
  if(igLinks) igLinks.forEach((url,i)=>{ if(instagramAccounts[i]) instagramAccounts[i].url=url })
  renderGrid("gridTiktok", tiktokAccounts, "tt")
  renderGrid("gridInstagram", instagramAccounts, "ig")
}
