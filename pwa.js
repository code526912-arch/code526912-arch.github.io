*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#070707;color:#eee;font-family:Arial,"Noto Sans KR",sans-serif;-webkit-text-size-adjust:100%;overscroll-behavior:none}
body.lock{position:fixed;width:100%;overflow:hidden}
button,input,select{font-family:inherit;font-size:16px;-webkit-tap-highlight-color:rgba(255,255,255,.18)}
button{min-height:44px;touch-action:manipulation;-webkit-appearance:none;appearance:none;cursor:pointer}
input,select{min-height:44px}
.header{background:linear-gradient(90deg,#1d0505,#0b0b0b);border-bottom:1px solid #3a1515;padding:12px 14px}
.title h1{margin:0;font-size:22px}.title small{color:#bfa57a}
.statbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:10px}
.stat{background:#181010;border:1px solid #3d1b1b;border-radius:10px;padding:8px 12px;min-width:120px;text-align:center}
.stat b,.gold{color:#ffd36d}
button{background:#222;color:white;border:1px solid #444;border-radius:8px;padding:9px 10px}
.red{background:#7d1111;border-color:#b63b3b}.goldBtn{background:linear-gradient(90deg,#eee0b5,#8d1d10);color:#111;font-weight:900}
.deleteBtn{background:#3b1111;border-color:#7d1111;color:#ffb3b3}
.tabBar{display:flex;gap:8px;align-items:center;padding:10px 14px;background:#0b0b0b;border-bottom:1px solid #2c1515;overflow-x:auto}
.kujiTab{white-space:nowrap;background:#1b1b1b;border:1px solid #3a2525;border-radius:10px}
.kujiTab.active{background:linear-gradient(90deg,#7d1111,#caa13a);color:#111;font-weight:900}
.layout{display:grid;grid-template-columns:280px 1fr 320px;gap:12px;padding:12px}
.panel{background:#101010;border:1px solid #2c1515;border-radius:12px;padding:12px}.panel h3{margin:0 0 10px;color:#d7b46a}
.row{display:flex;gap:6px;margin-bottom:8px}input,select{background:#050505;color:white;border:1px solid #333;border-radius:7px;padding:9px;width:100%}
.current{background:#211515;border:1px solid #563333;border-radius:10px;padding:12px;margin-bottom:10px}
.openBox{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}.openBox input{max-width:130px;text-align:center}
.selectedNums{background:#151515;border:1px solid #333;border-radius:12px;padding:12px;color:#d7b46a;margin:10px 0;font-weight:bold}.selectedNums.big{font-size:21px;border:2px solid #d7b46a;box-shadow:0 0 14px rgba(215,180,106,.35)}
.grid{display:grid;grid-template-columns:repeat(10,1fr);gap:7px;max-height:680px;overflow:auto;padding-right:4px}
.ticket{min-height:50px;background:#8b1111;border:1px solid #b53b3b;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;cursor:pointer;overflow:hidden;touch-action:manipulation;background-size:cover;background-position:center;background-repeat:no-repeat}
.ticket.hasFront{background-image:var(--ticket-front);color:transparent;text-shadow:none}
.ticket.pending{outline:3px solid #ffd36d;background:#b97812;box-shadow:0 0 14px #ffd36d}
.ticket.opened{background:#555;color:#111;flex-direction:column;font-size:12px}.ticket.winner{background:linear-gradient(135deg,#fff1a8,#c58b16,#6b3f00);border-color:#ffd36d;box-shadow:0 0 16px #ffd36d}
.backNum{font-size:18px;font-weight:900;color:#ffe08a}.frontNum{font-size:11px;color:#ddd}
.buyer{background:#171717;border:1px solid #2d2d2d;border-radius:8px;padding:8px;margin-bottom:7px;cursor:pointer;display:flex;justify-content:space-between;gap:6px}.buyer.active{border-color:#d6b45d;box-shadow:0 0 0 1px #d6b45d inset}
.badge{background:#6b2b1b;color:#ffd9a0;border-radius:12px;padding:2px 8px;font-size:12px}.miniBtn{font-size:12px;min-height:32px;padding:4px 7px}.buyerBtns{display:flex;gap:4px;margin-top:5px;flex-wrap:wrap}
.log,.rankItem{background:#171717;border-left:4px solid #8b1111;border-radius:7px;padding:8px;margin-bottom:7px;font-size:14px}.rankItem{border:1px solid #2d2d2d}.rankTop{display:flex;justify-content:space-between;font-weight:bold}.rankBarWrap{height:7px;background:#292929;border-radius:20px;overflow:hidden;margin-top:6px}.rankBar{height:100%;background:linear-gradient(90deg,#8b1111,#ffd36d)}
.prizeCard{background:#151515;border:1px solid #292929;border-radius:10px;padding:10px;margin-bottom:10px}.prizeCard img{width:100%;max-height:150px;object-fit:contain;background:#050505;border-radius:8px;margin:6px 0}.prizeTop{display:flex;justify-content:space-between;font-weight:bold}
.progressWrap{height:12px;background:#2a2a2a;border-radius:10px;overflow:hidden;margin:8px 0}.progress{height:100%;width:0;background:linear-gradient(90deg,#9c1111,#ffd089)}
.modal,.resultModal{position:fixed;inset:0;background:rgba(0,0,0,.84);display:none;align-items:flex-start;justify-content:center;overflow:auto;padding:24px 8px;z-index:60}.modal.show,.resultModal.show{display:flex}.modalBox,.resultBox{background:linear-gradient(#160707,#080808);border:1px solid #3a2525;border-radius:14px;padding:18px;width:720px;max-width:96vw}.resultBox{text-align:center;width:900px}.resultBox.single{width:760px;border:2px solid #d7b46a}.resultBox img{max-width:100%;max-height:520px;object-fit:contain;background:#050505;border-radius:12px;border:2px solid #d7b46a}.bigPrize{font-size:38px;color:#ffd36d;font-weight:900;margin:10px 0}
.settingBox{border:1px solid #292929;border-radius:10px;padding:10px;margin-top:10px}.formBlock{border:1px solid #252525;border-radius:12px;padding:12px;margin-bottom:12px}.formBlock label{color:#d7b46a;font-weight:bold;display:block;margin:8px 0 5px}.preview{max-width:130px;max-height:100px;object-fit:contain;display:block;margin-top:6px;border:1px solid #333;background:#050505}
.multiGrid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin:16px 0}.resultCard{background:linear-gradient(180deg,#fff,#e7dcc8);color:#222;border-radius:14px;padding:14px;min-height:150px;border:2px solid #caa13a;display:flex;flex-direction:column;align-items:center;justify-content:center}.gift{font-size:36px}
.questionGrid{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:18px 0}.qcard{width:74px;height:74px;border-radius:12px;background:#eee;color:#111;display:flex;align-items:center;justify-content:center;flex-direction:column;font-size:30px;font-weight:900;animation:pulse .8s infinite alternate}@keyframes pulse{from{transform:translateY(0)}to{transform:translateY(-8px);filter:brightness(1.2)}}
.revealCard{width:520px;max-width:90vw;height:310px;margin:10px auto;border:3px solid #8b1111;border-radius:18px;background:#111;overflow:hidden;position:relative;display:flex;align-items:center;justify-content:center;cursor:grab;touch-action:none;user-select:none}.revealCard.dragging{cursor:grabbing;animation:paperShake .12s infinite alternate}@keyframes paperShake{from{transform:translate(-1px,1px) rotate(-.25deg)}to{transform:translate(1px,-1px) rotate(.25deg)}}
.backNumberLayer{position:absolute;inset:0;z-index:1;display:flex;align-items:center;justify-content:center;background:#f5f5f5;color:#111;font-size:120px;font-weight:900}.frontImageLayer{position:absolute;inset:0;z-index:2}.frontImageLayer img{width:100%;height:100%;object-fit:cover}.frontFallback{display:flex;align-items:center;justify-content:center;font-size:80px;background:#8b1111}.revealCover{position:absolute;inset:0;background:linear-gradient(135deg,#111,#2b2b2b 45%,#caa13a 100%);z-index:3;transition:clip-path .045s linear;will-change:clip-path}.revealCover:after{content:'';position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(255,255,255,.06) 0 3px,transparent 3px 9px)}
.paperPiece{position:absolute;background:linear-gradient(135deg,#111,#2b2b2b 45%,#caa13a 100%);z-index:9;pointer-events:none;filter:drop-shadow(0 4px 8px rgba(0,0,0,.8));animation:paperFall .9s forwards}@keyframes paperFall{0%{opacity:1;transform:translate(0,0) rotate(0)}100%{opacity:0;transform:translate(var(--x),var(--y)) rotate(var(--r))}}
.stockBigOverlay,.selectedPopup,.winnerShowcase{position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:80;display:none;overflow:auto;padding:24px}.stockBigOverlay.show,.selectedPopup.show,.winnerShowcase.show{display:block}.stockBigGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.stockBigCard{background:#111;border:2px solid #d7b46a;border-radius:16px;padding:16px;text-align:center}.stockBigCard img{width:100%;height:240px;object-fit:contain;background:#050505;border-radius:12px}.stockBigRank{font-size:34px;font-weight:900;color:#ffd36d}.stockBigRemain{font-size:28px;font-weight:900}.selectedPopup{left:3vw;right:3vw;top:12vh;bottom:auto;border:2px solid #d7b46a;border-radius:18px;text-align:center}.selectedPopupList{font-size:26px;line-height:1.7;max-height:55vh;overflow:auto}
.winnerShowcase{display:none;align-items:center;justify-content:center;text-align:center}.winnerShowcase.show{display:flex}.winnerShowBox{width:760px;max-width:95vw;background:linear-gradient(#160707,#050505);border:3px solid #ffd36d;border-radius:24px;padding:24px;box-shadow:0 0 35px rgba(255,211,109,.6)}.winnerShowBox img{width:100%;max-height:480px;object-fit:contain;background:#050505;border-radius:16px}.winnerShowRank{font-size:52px;font-weight:900;color:#ffd36d}.winnerShowName{font-size:30px;font-weight:800}.winnerShowMeta{font-size:20px;color:#ddd}
.celebrate{position:fixed;inset:0;pointer-events:none;z-index:95;overflow:hidden}.confetti{position:absolute;width:10px;height:16px;background:#ffd36d;animation:fall 1.2s linear forwards;will-change:transform,opacity}@keyframes fall{0%{transform:translateY(-30px) rotate(0);opacity:1}100%{transform:translateY(105vh) rotate(540deg);opacity:0}}
.mobileQuickBar{display:none;padding-bottom:calc(6px + env(safe-area-inset-bottom,0px))}
.broadcastMode .header,.broadcastMode .tabBar,.broadcastMode .openBox,.broadcastMode .mobileQuickBar,.broadcastMode .leftCol{display:none!important}.broadcastMode .layout{grid-template-columns:1fr 330px}
@media(max-width:768px){
 body{font-size:14px;padding-bottom:78px}.header{padding:10px}.title h1{font-size:18px}.title small{font-size:11px;display:block}.statbar{display:grid;grid-template-columns:1fr 1fr;gap:6px}.statbar button{font-size:12px;padding:8px 6px}.stat{min-width:0;font-size:12px}
 .tabBar{padding:7px}.kujiTab{font-size:12px;padding:7px 10px}.layout{display:flex;flex-direction:column;padding:8px}.leftCol{order:2}main{order:1}aside{order:3}.panel{margin-bottom:8px;padding:10px}.openBox{display:grid;grid-template-columns:1fr 1fr}.openBox input,.openBox button{width:100%;max-width:none;font-size:13px;padding:9px 5px}#ticketInput{grid-column:1/3;font-size:18px}.grid{grid-template-columns:repeat(5,1fr);gap:6px;max-height:none}.ticket{min-height:58px}.selectedNums.big{font-size:16px;max-height:115px;overflow:auto}.prizeCard{display:grid;grid-template-columns:82px 1fr;gap:8px;align-items:center}.prizeCard img{width:82px;height:82px;margin:0}.prizeTop{display:block}
 .resultBox,.modalBox{width:96vw!important;padding:14px}.resultBox img{max-height:330px}.bigPrize{font-size:28px}.multiGrid{grid-template-columns:repeat(2,1fr);gap:8px}.resultCard{min-height:135px;padding:10px}.revealCard{width:94vw;height:56vw;min-height:220px;max-height:320px}.backNumberLayer{font-size:78px}.stockBigGrid{grid-template-columns:1fr}.stockBigCard img{height:180px}.winnerShowBox{width:96vw;padding:16px}.winnerShowRank{font-size:34px}.winnerShowName{font-size:22px}.winnerShowMeta{font-size:15px}
 .mobileQuickBar{display:grid;grid-template-columns:repeat(4,1fr);position:fixed;left:0;right:0;bottom:0;background:#090909;border-top:1px solid #3a2525;z-index:45;gap:4px;padding:6px}.mobileQuickBar button{font-size:12px;padding:8px 4px}
}

.prizeAlert{position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:96;display:none;align-items:center;justify-content:center;text-align:center;padding:20px}
.prizeAlert.show{display:flex}
.prizeAlertBox{width:820px;max-width:96vw;background:radial-gradient(circle at top,#2b1400,#070707 62%);border:4px solid #ffd36d;border-radius:28px;padding:28px;box-shadow:0 0 45px rgba(255,211,109,.8);animation:prizePop .42s ease-out}
.prizeAlert.lastone .prizeAlertBox{background:radial-gradient(circle at top,#4a0000,#080000 60%);border-color:#fff1a8;box-shadow:0 0 60px rgba(255,230,120,.95)}
.prizeAlertRank{font-size:62px;font-weight:900;color:#ffd36d;text-shadow:0 0 18px rgba(255,211,109,.9);margin:8px 0}
.prizeAlertName{font-size:30px;font-weight:900;color:#fff;margin:10px 0}
.prizeAlertMeta{font-size:20px;color:#ddd}
.prizeAlertImg{width:100%;max-height:520px;object-fit:contain;background:#050505;border:2px solid #d7b46a;border-radius:18px;margin-top:14px}
.prizeAlertBasic .prizeAlertBox{border-color:#555;box-shadow:none;background:#111}
.prizeAlertBasic .prizeAlertRank{color:#ccc;text-shadow:none}
@keyframes prizePop{0%{transform:scale(.78);opacity:0}65%{transform:scale(1.05);opacity:1}100%{transform:scale(1)}}
body.hitShake{animation:hitShake .35s linear}
@keyframes hitShake{0%,100%{transform:translate(0,0)}20%{transform:translate(-7px,3px)}40%{transform:translate(7px,-3px)}60%{transform:translate(-5px,-2px)}80%{transform:translate(5px,2px)}}
.ticket.lastOneWin{background:linear-gradient(135deg,#ff004c,#ffd36d,#5d00ff);border-color:#fff;box-shadow:0 0 22px #ffd36d}
.fileNotice{
  background:#3b1111;
  border:1px solid #d7b46a;
  color:#ffd36d;
  padding:10px;
  margin:8px;
  border-radius:10px;
  font-size:14px;
}
