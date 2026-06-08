'use client'

import CardNav from '../src/component/CardNav';

export default function Navbar() {
  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "About Me", href: "#about", ariaLabel: "About Me" },
        { label: "Skills", href: "#skills", ariaLabel: "Skills" },
      ]
    },
    {
      label: "Contact",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:Raffapratama123221@gmail.com", ariaLabel: "Email" },
        { label: "GitHub", href: "http://github.com/raffaportofolio", ariaLabel: "GitHub" },
        { label: "Instagram", href: "https://instagram.com/raffaprtma_", ariaLabel: "Instagram" },
      ]
    }
  ];

  return (
    <CardNav
      logo=""
      logoAlt=""
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
    />
  );
}