import React from 'react';
import {User} from './User';
import './Style.css'


const Users = () => {
    const simpsons = [
        {id:1, name: 'Гомер Джей Сімпсон', characteristic: 'батько родини, гладкий, лисий, ' +
                'ледачий і не дуже розумний. Він часто поводиться абсурдно, егоїстично і нетактовно.',
            image: 'https://w7.pngwing.com/pngs/292/502/png-transparent-homer-simpson-cartoon-human-behavior-character-homer-simpsons-fictional-character-animal-simpsons.png'},
         {id:2, name: 'Марджері «Мардж» Сімпсон', characteristic: 'дружина Гомера, дівоче ім\'я — Був\'є. ' +
                 'Домогосподарка, майже весь час проводить вдома, доглядаючи за наймолодшою дитиною Меґґі,' +
                 ' а також за Бартом і Лісою, і навіть за чоловіком. Її найвідоміша особливість — блакитне волосся, ' +
                 'зібране у високу зачіску.', image: 'https://static.wikia.nocookie.net/simpsons/images/8/87/Marge_Simpson_2.png'},
            {id:3, name: 'Бартоломео «Барт» Сімпсон', characteristic: ' 10-літній син Гомера і Мардж Сімпсон, ' +
                    'найстарша дитина в сім\'ї, втіллення образу непослуха, бешкетника і посереднього учня в школі.',
                image: 'https://static.wikia.nocookie.net/simpsonstappedout/images/d/d2/Bart_Unlock.png'},
            {id:4, name: 'Ліса Мері Сімпсон', characteristic: 'дочка Гомера і Мардж Сімпсон, надзвичайно розумна,' +
                    ' не по літах розвинена, суспільно активна дівчинка. Любить джаз та грає на саксофоні, цікавиться філософією, наукою, історією.',
                image: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png' },
            {id:5, name: 'Маргарет «Меґґі» Сімпсон', characteristic: 'найменша дочка Гомера в Мардж Сімпсон. ' +
                    'Протягом усіх років серіалу не росте і завжди залишається немовлям у повзунках та підгузнику.',
                image: 'https://static.wikia.nocookie.net/simpsons/images/8/8b/Maggie.jpg'}
        ]

      return (
        <div>
            {simpsons.map(user => <User key={user.id} simpsons={user}/>)}
        </div>
    );
};

export default Users;