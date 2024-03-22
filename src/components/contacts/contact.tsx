import Link from "next/link";
import { ContactCSS } from "./contact.css";
import Image from "next/image";

export default function Contacts() {
  return (
    <ContactCSS.Conteiner id="contact">
      <ContactCSS.Text>
        <h1>Contact Me Here</h1>
      </ContactCSS.Text>
      <ContactCSS.Contacts>
        <Link href="/">
          <Image
            src="/medias/linkedin.png"
            alt="LinkedIn"
            width={50}
            height={50}
          />
        </Link>
        <Link href="/">
          <Image
            src="/medias/github.png"
            alt="GitHub"
            width={50}
            height={50}
          />
        </Link>
        <Link href="/">
          <Image
            src="/medias/instagram.png"
            alt="Instagram"
            width={50}
            height={50}
          />
        </Link>
      </ContactCSS.Contacts>
    </ContactCSS.Conteiner>
  );
}
