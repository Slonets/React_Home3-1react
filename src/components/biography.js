import "./biography.css";
import rafaelImage from '../rafael.jpg';
export default function Biography()
{
    return(
        <>
            <div className="style">

                <h1>Рафаель</h1>

                <img src={rafaelImage} alt="Фото Рафаеля"/>

                <p>
                    Рафаель Санті (6 квітня 1483 - 6 квітня 1520) — італійський живописець та архітектор, один із
                    найвидатніших майстрів Відродження.
                </p>

                <p>
                    Народився в Урбіно, Італія, Рафаель став великим майстром італійського живопису в період Ренесансу.
                    Він працював у Римі, де його творчість отримала широке визнання.
                </p>

                <p>
                    Рафаель став відомий своєю вишуканою технікою, гармонією композицій та високою естетикою своїх
                    творів. До його визначних творів входять "Школа Афін", "Сикстинська Мадонна" та "Портрет молодої
                    жінки з їдким глечиком".
                </p>

                <p>
                    Рафаель помер у віці 37 років, але його спадщина залишилася невмирущою, впливаючи на мистецтво
                    протягом століть.
                </p>

            </div>
        </>
    )
}