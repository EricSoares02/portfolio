import { BusinessCSS } from "./business.css";


const business = [
    {
        title: 'SaaS Application',
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, in officia magnam suscipit id doloremque, enim optio facilis, velit accusantium! Expedita, neque quam facilis officiis illo aspernatur magnam quidem. ",
        link: 'www.mercadolivre.com'
    },
    {
        title: 'SaaS Application',
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, in officia magnam suscipit id doloremque, enim optio facilis, velit accusantium! Expedita, neque quam facilis officiis illo aspernatur magnam quidem. ",
        link: 'www.mercadolivre.com'
    },
    {
        title: 'SaaS Application',
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, in officia magnam suscipit id doloremque, enim optio facilis, velit accusantium! Expedita, neque quam facilis officiis illo aspernatur magnam quidem. ",
        link: 'www.mercadolivre.com'
    },
    {
        title: 'SaaS Application',
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, in officia magnam suscipit id doloremque, enim optio facilis, velit accusantium! Expedita, neque quam facilis officiis illo aspernatur magnam quidem. ",
        link: 'www.mercadolivre.com'
    },
    {
        title: 'SaaS Application',
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque, in officia magnam suscipit id doloremque, enim optio facilis, velit accusantium! Expedita, neque quam facilis officiis illo aspernatur magnam quidem. ",
        link: 'www.mercadolivre.com'
    },
]

export default function Business(){


    return (
        <BusinessCSS.Conteiner>
            <BusinessCSS.Align>
                <BusinessCSS.BusinessAndApllications>
                <BusinessCSS.Text>
                    <h1>Businnes, <br /> Experience <br />&#38; Personal Applications.</h1>
                </BusinessCSS.Text>
                    <BusinessCSS.BusinessAndApllicationsCase>

                    {business.map((item)=>(
                        <BusinessCSS.Cases key={item.title}>
                            <BusinessCSS.Title>
                                <span>{item.title}</span>
                            </BusinessCSS.Title>
                            <BusinessCSS.Details>
                                <p>{item.detail}</p>
                            </BusinessCSS.Details>
                        </BusinessCSS.Cases>
                    ))}


                    </BusinessCSS.BusinessAndApllicationsCase>
                </BusinessCSS.BusinessAndApllications>
            </BusinessCSS.Align>
        </BusinessCSS.Conteiner>
    )

}