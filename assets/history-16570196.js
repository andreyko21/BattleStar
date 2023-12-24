import{$ as e}from"./jquery-ab814638.js";class o{content;history;constructor(a,s){this.content=a,this.history=s,this.renderHistory()}renderHistory(){const a=this.history.map(t=>`
            <tr class="table__tr">
              <td class="table__name">${t.name}</td>
              <td class="table__data">${t.data}</td>
              <td class="table__time">${t.time}</td>
              <td class="table__regime">Режим <span>${t.regime}</span></td>
              <td class="table__id">ID <span>${t.id}</span></td>
              <td class="table__win">
              ${t.result}
              </td>
              <td class="table__money">+ ${t.money} <span>BS</span></td>
            </tr>`).join(""),s=document.querySelector(this.content);s&&(s.innerHTML=a),e(".table__win").each(function(){if(e(this).text().trim()==="Поражение"){e(this).addClass("table__win_defeat");const n=e(this).next(".table__money");if(n.length>0){const m=n.text().trim();m.includes("+")&&n.text(m.replace("+","-"))}}}),e(".table__time").each(function(){const n=e(this).text().trim().slice(0,5);e(this).text(n)}),e(".table__data").each(function(){const n=e(this).text().trim().slice(0,10).replace(/-/g,".");e(this).text(n)})}}let l=[{name:"CS:GO",data:"07.06.2021",time:"19:20",regime:"5v5",id:3758902,result:"Победа",money:1200},{name:"CS:GO",data:"07.06.2021",time:"19:20",regime:"5v5",id:3758902,result:"Поражение",money:200},{name:"Dota 2",data:"07.06.2021",time:"19:20",regime:"5v5",id:3758902,result:"Поражение",money:500},{name:"Dota 2",data:"07.06.2021",time:"19:20",regime:"5v5",id:3758902,result:"Победа",money:700},{name:"CS:GO",data:"07.06.2021",time:"19:20",regime:"5v5",id:3758902,result:"Победа",money:1200},{name:"CS:GO",data:"07.06.2021",time:"19:20",regime:"5v5",id:3758902,result:"Победа",money:1200},{name:"Dota 2",data:"07.06.2021",time:"19:20",regime:"5v5",id:3758902,result:"Поражение",money:500},{name:"Dota 2",data:"07.06.2021",time:"19:20",regime:"5v5",id:3758902,result:"Победа",money:1200}];const d=l.reduce((i,a)=>(a.result==="Поражение"?i-=a.money:i+=a.money,i),0);new o(".table__tab",l);export{d as s};
