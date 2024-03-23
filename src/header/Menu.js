import {Link} from "react-router-dom";
import "./menu_styles.css";
export default function Menu()
{
    return(
        <>
            <div className="blockMenu">
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Біографія</Link>
                        </li>

                        <li>
                            <Link to={'/picture'}>Найвідоміша картина</Link>
                        </li>

                        <li>
                            <Link to={'/pictures'}>
                                Колекція картин
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}