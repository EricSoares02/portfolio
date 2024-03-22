import { FooterCSS } from "./footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <FooterCSS.Conteiner>
      <FooterCSS.LogoCase>
        <div className="line"></div>
        <Image src="/e.png" width={100} height={100} alt="Soares Logo" />
        <div className="line"></div>
      </FooterCSS.LogoCase>
      <FooterCSS.TCase>
        <FooterCSS.MediaCase></FooterCSS.MediaCase>
        <FooterCSS.FormCase>
          <FooterCSS.Form>
            <FooterCSS.Input form="form"/>
            <FooterCSS.Submit placeholder="Send"/>
          </FooterCSS.Form>
        </FooterCSS.FormCase>
      </FooterCSS.TCase>
    </FooterCSS.Conteiner>
  );
}
