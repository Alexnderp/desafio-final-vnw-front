import s from "./cardHome.module.scss";

export default function CardHome() {
  const cards = [
    {
      img: "https://s3-alpha-sig.figma.com/img/f2bf/f052/0fe1fd652a3688430f6b49ec2f8d004f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZPx8iBPjxM0v005U-Dy-u70wXlK1U9klPjfUTyHCv9ZOytrWoveMDrL6AqYxMvi-mMYLTaASnNZdRtkzXf8pId7V7W-1Aep2lZ3Pp560Ey-Qc0WrNwz0ifxVb1C4M~qBgEO4aKskCkIj~EhePDCC-KC3DaXVu37b1AcBAQZia2S4mWmLZXklohFILN4siQRtRaf9XbJvBmDH5P8Q0oBG1RkcuNQEAY0LJOtIgcCrpkli7vymOrbvVR~N8UM1KaQZDKqGssOiJki1V9IiE93lNQvgK3DexkJi0K8cxhjdE0EuoOn-6FcrqLXxib0DtquniPzHzliVxNgcNN8ahlY8cQ__",
      text: " Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/ef2f/696d/61ff00e449c47d77feabefe50eb27302?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aNje6L5kFAWY4SPWDiJISsVEP0JxqkxUj9Lr1Z~zBnvaschAc~QmfeBS-NcABSwIamC51Wo1tCwxc301TIuDs4yRdE3btdXwUd2NjQlMU9KH-juOAJARTa5z9dcNDvNE7Ybh3rGWB8wTOcBJzDf21VF1kjZla1qEF74vB9kX-4-X0uCOP95RPWMZ7env8rW-TTudPCh~YHdZr9UhU8Cm6Ro053u8A5-u0u6kjEQiEpjI6KIyaJf3Tqr9T9oHfqdT-t-OoUW5wts7mFRM~nEMHenoQIaOffEp-WgoXem7pUan77MGNGxp5ppffszNcz-2gAULYL5pTqcCL3DFKB2drg__",
      text: "Estimula o hábito da leitura e o aprendizado contínuo.",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/ab0e/395c/c8bf3d0b334f2c6c06110f618bb127b4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZFIt53OFwKwOBnJ68CGkqIy-G93DjsahLQl67zOd73NtNzchCjS7wJj6zzcgPLu0tWmgcy-5oDDZTD9nnF2ofKlGTl7s3AZTFUUsIrcJlG8rn7hUEiB9gnwAN04emyTm6lS~ghQT7RypDIWGINN5GdwXh5nxBY3UPHTL02pwWl7EjHbS9lWZI1XcVQ4FmbaYHMk0hrb914vHfhQk56eqTVdjE~wd030zkmrlo4G1amWFSIO7iKsd5r3MyKcWQJ19YVamA9F1uioaj2iQMFFbOuuVJ21XX6Ehyy2pdrj1nPQkMHYPmcOntb8V83dEtak94xwPsUCp~VzKoGVo3Oj2Sg__",
      text: "Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/ad24/ad63/219a08598b4e64afdf609e849645bb80?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ljd4obFabaqKqQFqPnEvtpL4c1Men7SuxCyUk4w7-8wJFGt3c5AgUOT0MxU7d9LFu31ZuwTbcBEyUajY-p4Cp0hAqKQeKkB6rSlQp7W4DOLszYPyzAFt01xsbvBrosD2p5LriSvKvOMq0ofmSHj-jurBX2ICqPbrGMrZ0RE81~PvML-jVgN8~F~yX9gyzhtWRkXVCdQVhPnDfKfEpbDUmEp6s3LLLaBL97MWNMZJSK2SvRyTdfMZgMlPAA5wmUmhZbf9bwuMSNzw1sh6iAvGcpGl1N4Naf3-VaJVIaupXTRW6S0Zbx3NJe9B3WRU~K~zyMEov8EQsDwROl~V3uHQ3A__",
      text: "Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.",
    },
  ];
  const divs = [];

  for (let i = 0; i < cards.length; i++) {
    divs.push(
      <div className={s.conteiner}>
        <img src={cards[i].img} alt="" />
        <p>{cards[i].text}</p>
      </div>
    );
  }

  return <section className={s.box}>{divs}</section>;
}
