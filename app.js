const status = document.getElementById('status');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

let player = {
  money: 100,
  exp: 0,
  admin: false,
};

function appendStatus(msg) {
  const p = document.createElement('p');
  p.textContent = msg;
  status.appendChild(p);
  status.scrollTop = status.scrollHeight;
}

function processCommand(cmd) {
  cmd = cmd.trim();
  if (cmd === 'ლუკა') {
    player.admin = true;
    player.money = 999999;
    player.exp = 9999;
    appendStatus('🎉 შენ გახდი ადმინი! ყველა პროფესიაში EXP მაქსიმალურად, ფული შენს ანგარიშზე: 999,999 ₾');
  } else if (cmd === 'WantedClear') {
    appendStatus('Wanted სისტემა ნულდება ✅');
  } else if (cmd.startsWith('GiveCar')) {
    const car = cmd.split(' ')[1] || 'DefaultCar';
    appendStatus(`🚗 შენ მიიღო ავტომობილი: ${car}`);
  } else if (cmd === 'RandomEvent') {
    appendStatus('💥 შემთხვევითი მოვლენა მოხდა ქუჩაში!');
  } else if (cmd === 'UnlockBusiness') {
    appendStatus('🏢 ყველა ბიზნესი მაქსიმალურად განბლოკილია!');
  } else {
    appendStatus(`💬 შენ დაწერე: ${cmd}`);
  }
}

sendBtn.addEventListener('click', () => {
  const cmd = chatInput.value;
  if (!cmd) return;
  processCommand(cmd);
  chatInput.value = '';
});

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});
