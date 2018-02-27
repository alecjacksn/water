import React, { Component } from 'react';
import './productGenerator.css'
const products = [

    {
        category: 'motivation',
        image: <a target="_blank" href="https://www.amazon.com/gp/product/B00VIB8KBQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00VIB8KBQ&linkCode=am2&tag=waterstore03-20&linkId=e770acecd461d7075f45b9ee9726d82c"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00VIB8KBQ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B00VIB8KBQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00VIB8KBQ&linkCode=as2&tag=waterstore03-20&linkId=2778d584609865bcf7073b8d094a844d">Kikkerland Magnetic Hourglass</a>,
        link: 'https://www.amazon.com/gp/product/B00VIB8KBQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00VIB8KBQ&linkCode=am2&tag=waterstore03-20&linkId=e770acecd461d7075f45b9ee9726d82c'
    },
    {
        category: 'motivation',
        image: <a target="_blank" href="https://www.amazon.com/gp/product/0991846222/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0991846222&linkCode=as2&tag=waterstore03-20&linkId=7a803ca739c9ca6ab00bb94a6841a103"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0991846222&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/0991846222/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0991846222&linkCode=as2&tag=waterstore03-20&linkId=678945612a1edf716584115c0892662b">Productivity Planner -  Accomplish your 2018 Goals</a>,
        link: 'https://www.amazon.com/gp/product/0991846222/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0991846222&linkCode=as2&tag=waterstore03-20&linkId=7a803ca739c9ca6ab00bb94a6841a103'
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B01LEB38Z2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01LEB38Z2&linkCode=as2&tag=waterstore03-20&linkId=75c2ce449ae2507e0d3c434b923bc4c7"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01LEB38Z2&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B01LEB38Z2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01LEB38Z2&linkCode=as2&tag=waterstore03-20&linkId=a19e489bceb958fa97becc8a865c9f7c">Elviros Cotton Linen Home Decorative Throw Pillow Case Cushion Cover,  18" x 18"</a>,
        link: '"https://www.amazon.com/gp/product/B01LEB38Z2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01LEB38Z2&linkCode=as2&tag=waterstore03-20&linkId=a19e489bceb958fa97becc8a865c9f7c"'
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B01HGDR5Q0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HGDR5Q0&linkCode=as2&tag=waterstore03-20&linkId=6e4ac9a9f7f8778567001da43bb433c7"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HGDR5Q0&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B01HGDR5Q0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HGDR5Q0&linkCode=as2&tag=waterstore03-20&linkId=8d629a57b131eece0b0eea44bf7a3d8a"> Kess Original "White Marble" Twin Cotton Duvet Cover, 68 by 88-Inch</a>,
        link: "https://www.amazon.com/gp/product/B01HGDR5Q0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HGDR5Q0&linkCode=as2&tag=waterstore03-20&linkId=8d629a57b131eece0b0eea44bf7a3d8a"
    },
    {
        category: 'electronics',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B00RVOJ1BW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00RVOJ1BW&linkCode=as2&tag=waterstore03-20&linkId=9165463a774eeac071be20d2c6606779"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00RVOJ1BW&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B00RVOJ1BW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00RVOJ1BW&linkCode=as2&tag=waterstore03-20&linkId=9809005403abca4aaa32f9c9f94295d3">Crosley CR6250A-BK Keepsake Deluxe Portable and Adjustable USB Turntable with Built-in Preamp, Black</a>,
        link: "https://www.amazon.com/gp/product/B00RVOJ1BW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00RVOJ1BW&linkCode=as2&tag=waterstore03-20&linkId=9809005403abca4aaa32f9c9f94295d3"

    },
    {
        category: 'motivation',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B06XGQL4QZ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06XGQL4QZ&linkCode=as2&tag=waterstore03-20&linkId=bc07c3f47e48c5e33499d37ecb8af934"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06XGQL4QZ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B06XGQL4QZ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06XGQL4QZ&linkCode=as2&tag=waterstore03-20&linkId=26cfc89938ed01226560802f5eeaf389">Ultimate Guard Tarot Flip Deck Case 70+ Xenoskin, Black</a>,
        link: "https://www.amazon.com/gp/product/B06XGQL4QZ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06XGQL4QZ&linkCode=as2&tag=waterstore03-20&linkId=26cfc89938ed01226560802f5eeaf389"
    },
    {
        category: 'motivation books',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/0847826694/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0847826694&linkCode=as2&tag=waterstore03-20&linkId=a09f616ea4be3cd43fbd1b8fc188addc"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0847826694&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/0847826694/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0847826694&linkCode=as2&tag=waterstore03-20&linkId=12f7db21254e85a20b462cd46efe0055">Tom Ford</a>,
        link: "https://www.amazon.com/gp/product/0847826694/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0847826694&linkCode=as2&tag=waterstore03-20&linkId=12f7db21254e85a20b462cd46efe0055"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B00WTM72SU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00WTM72SU&linkCode=as2&tag=waterstore03-20&linkId=d032bd34b83fc7358263874320fdbd81"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00WTM72SU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B00WTM72SU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00WTM72SU&linkCode=as2&tag=waterstore03-20&linkId=82482e7d66e363261918f72ee4e75e48">Byredo - Burning Rose Candle</a>,
        link: "https://www.amazon.com/gp/product/B00WTM72SU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00WTM72SU&linkCode=as2&tag=waterstore03-20&linkId=82482e7d66e363261918f72ee4e75e48"
    },
    {
        category: 'misc',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B003LWCIHW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003LWCIHW&linkCode=as2&tag=waterstore03-20&linkId=0618c93347ea16a4458e7887ed87bc23"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B003LWCIHW&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B003LWCIHW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003LWCIHW&linkCode=as2&tag=waterstore03-20&linkId=4430eb0e0dbb9351f7f1cda4e351edc0">GoldCoast Skateboard - Complete Longboard - Classic Bamboo Pintail 44"</a>,
        link: "https://www.amazon.com/gp/product/B003LWCIHW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003LWCIHW&linkCode=as2&tag=waterstore03-20&linkId=4430eb0e0dbb9351f7f1cda4e351edc0"
    },
    {
        category: 'motivation books',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/0847831728/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0847831728&linkCode=as2&tag=waterstore03-20&linkId=777babb5e88540eb9812362a71b0db13"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0847831728&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/0847831728/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0847831728&linkCode=as2&tag=waterstore03-20&linkId=c073ad14a74e494399f89376dfc200fe">Valentino: Themes and Variations</a>,
        link: "https://www.amazon.com/gp/product/0847831728/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0847831728&linkCode=as2&tag=waterstore03-20&linkId=c073ad14a74e494399f89376dfc200fe"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B073SNFWSX/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B073SNFWSX&linkCode=as2&tag=waterstore03-20&linkId=2e24e89e06dcd6567c123c02a6648dcd"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B073SNFWSX&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title"  target="_blank" href="https://www.amazon.com/gp/product/B073SNFWSX/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B073SNFWSX&linkCode=as2&tag=waterstore03-20&linkId=15dd5f707b93135c9ec8a3f2a5d58807">DECORA 36 Yards Artificial Gold Leaf Ribbon Trim for Wreath Making Gift Wrapping Wedding Decoration</a>,
        link: "https://www.amazon.com/gp/product/B073SNFWSX/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B073SNFWSX&linkCode=as2&tag=waterstore03-20&linkId=15dd5f707b93135c9ec8a3f2a5d58807"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B00U0H9JAK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00U0H9JAK&linkCode=as2&tag=waterstore03-20&linkId=a547b1b3cec11b5e445907cc7b61af8c"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00U0H9JAK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a target="_blank" className="products-title"  href="https://www.amazon.com/gp/product/B00U0H9JAK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00U0H9JAK&linkCode=as2&tag=waterstore03-20&linkId=4469cf074fe8fb055ad15f5cc18877ba">Modern Diamond Design Clear Faceted Succulent Air Plant Planter Box Pot / Keepsake Display Bowl - MyGift</a>,
        link: "https://www.amazon.com/gp/product/B00U0H9JAK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00U0H9JAK&linkCode=as2&tag=waterstore03-20&linkId=4469cf074fe8fb055ad15f5cc18877ba"
    },
    {
        category: 'motivation books',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/0300175663/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0300175663&linkCode=as2&tag=waterstore03-20&linkId=4732257b4602d348d8676ed2207192d6"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0300175663&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/0300175663/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0300175663&linkCode=as2&tag=waterstore03-20&linkId=6f4490d08d6044d6be71667e8d90c6a7">Chanel: The Vocabulary of Style</a>,
        link: "https://www.amazon.com/gp/product/0300175663/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0300175663&linkCode=as2&tag=waterstore03-20&linkId=6f4490d08d6044d6be71667e8d90c6a7"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B01IBISZE0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01IBISZE0&linkCode=as2&tag=waterstore03-20&linkId=0e0d32ad11d063fab366c99ba71ba304"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01IBISZE0&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B01IBISZE0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01IBISZE0&linkCode=as2&tag=waterstore03-20&linkId=e81d9431a58415655fe2c38a24877833">Thirstystone Round White Marble/Gold Edged Coasters (Set of 4), Multicolor</a>,
        link: "https://www.amazon.com/gp/product/B01IBISZE0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01IBISZE0&linkCode=as2&tag=waterstore03-20&linkId=e81d9431a58415655fe2c38a24877833"
    },
    {
        category: 'womens sunglasses',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B001M5CSW0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001M5CSW0&linkCode=as2&tag=waterstore03-20&linkId=8cfe392b66d0a7950540d99550de7367"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B001M5CSW0&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B001M5CSW0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001M5CSW0&linkCode=as2&tag=waterstore03-20&linkId=73fa1f7e653c454caf347d37ed4c6ecd">Rhode Island Novelty - John Lennon Style Sunglasses, Pink</a>,
        link: "https://www.amazon.com/gp/product/B001M5CSW0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001M5CSW0&linkCode=as2&tag=waterstore03-20&linkId=73fa1f7e653c454caf347d37ed4c6ecd"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B072F7YZD2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B072F7YZD2&linkCode=as2&tag=waterstore03-20&linkId=2aef1c6eaa19338906cd1546b7f37578"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B072F7YZD2&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B072F7YZD2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B072F7YZD2&linkCode=as2&tag=waterstore03-20&linkId=8cd8d65d5a483f96d41b3c22b82d4ac7">Kingla Home Square Cushion Cover For Couch Gold Printed “LOVE” Throw Pillow Cover 18x18 Inch(45cmx45cm) Decorative Pillow Case For Valentine's Day</a>,
        link: "https://www.amazon.com/gp/product/B072F7YZD2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B072F7YZD2&linkCode=as2&tag=waterstore03-20&linkId=8cd8d65d5a483f96d41b3c22b82d4ac7"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B073Y47G3K/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B073Y47G3K&linkCode=as2&tag=waterstore03-20&linkId=3737a855035b93c4ebf30e92755bfc86"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B073Y47G3K&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B073Y47G3K/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B073Y47G3K&linkCode=as2&tag=waterstore03-20&linkId=387b242c6f651c705c97165c3da72e89">10-Light 5Ft Gold Metal Mesh Pineapple LED lantern String Lights Battery Powered Novelty Fairy Lights For Bedroom Wedding Patio Party Festival Decoration (Warm White）</a>,
        link: "https://www.amazon.com/gp/product/B073Y47G3K/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B073Y47G3K&linkCode=as2&tag=waterstore03-20&linkId=387b242c6f651c705c97165c3da72e89"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B0063LW9K4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0063LW9K4&linkCode=as2&tag=waterstore03-20&linkId=4a46e5bec3a61bd4ae37f67130cd8437"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0063LW9K4&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B0063LW9K4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0063LW9K4&linkCode=as2&tag=waterstore03-20&linkId=cc5bfa3425df66e3b8226a9d95c98802">Geometric Stone Sculpture, 4.9" Tall 'Life Force'</a>,
        link: "https://www.amazon.com/gp/product/B0063LW9K4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0063LW9K4&linkCode=as2&tag=waterstore03-20&linkId=cc5bfa3425df66e3b8226a9d95c98802"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B01798AB90/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01798AB90&linkCode=as2&tag=waterstore03-20&linkId=b1c31815a713bffb9a4e63cbab963334"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01798AB90&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B01798AB90/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01798AB90&linkCode=as2&tag=waterstore03-20&linkId=70903d4fceef6d2cfc2a520f82fbb933">Kikkerland Concrete Desktop Planter, Small (PL02-S)</a>,
        link: "https://www.amazon.com/gp/product/B01798AB90/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01798AB90&linkCode=as2&tag=waterstore03-20&linkId=70903d4fceef6d2cfc2a520f82fbb933"
    },
    {
        category: 'motivation decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B00MWQCNSW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MWQCNSW&linkCode=as2&tag=waterstore03-20&linkId=89a7df03e250d4a71dafe46c2c3a867c"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00MWQCNSW&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B00MWQCNSW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MWQCNSW&linkCode=as2&tag=waterstore03-20&linkId=8d7ff872ff75212af52fa7fd76618717">Raindrop 2.0 Nebulizing Essential Oil Diffuser For Aromatherapy By Organic Aromas Light-colored Wood Base and Glass Reservoir With Touch Sensor Light Switch</a>,
        link: "https://www.amazon.com/gp/product/B00MWQCNSW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MWQCNSW&linkCode=as2&tag=waterstore03-20&linkId=8d7ff872ff75212af52fa7fd76618717"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B06XD1BFN9/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06XD1BFN9&linkCode=as2&tag=waterstore03-20&linkId=09f20bb3b44ac712a336fc39689cecd0"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B06XD1BFN9&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B06XD1BFN9/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06XD1BFN9&linkCode=as2&tag=waterstore03-20&linkId=3629ecda25465ead5b6ea6c2e09c1e6e">Labhanshi Gold Mandala Tapestry , Indian Hippie Wall Hanging , Bohemian Twin Wall Hanging, Bedspread Beach Tapestry 54x84 inch</a>,
        link: "https://www.amazon.com/gp/product/B06XD1BFN9/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06XD1BFN9&linkCode=as2&tag=waterstore03-20&linkId=3629ecda25465ead5b6ea6c2e09c1e6e"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B01MSY1KQR/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MSY1KQR&linkCode=as2&tag=waterstore03-20&linkId=e49885216f9ac01c60f692ddd18d4794"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MSY1KQR&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B01MSY1KQR/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MSY1KQR&linkCode=as2&tag=waterstore03-20&linkId=fd977fa413f3edfebf9a16a90a3cee52">Ombre Mandala Tapestry - Black and White Indian/Hindu Wall Hanging - 100% Cotton - Bohemian Wall Decor by RawyalCrafts</a>,
        link: "https://www.amazon.com/gp/product/B01MSY1KQR/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MSY1KQR&linkCode=as2&tag=waterstore03-20&linkId=fd977fa413f3edfebf9a16a90a3cee52"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B000QTUJXS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000QTUJXS&linkCode=as2&tag=waterstore03-20&linkId=65dec91a7f40b3ff99bcc574749c6c0b"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B000QTUJXS&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B000QTUJXS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000QTUJXS&linkCode=as2&tag=waterstore03-20&linkId=5de95dff582ba12c5f4bb38e8cccf5ff">HoMedics Envirascape Silver Springs Illuminated Relaxation Fountain with Natural Stones, Stress Reliever, Natural Sound, Great For Office, Living Room, Vacation House, WFL-SLVS</a>,
        link: "https://www.amazon.com/gp/product/B000QTUJXS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000QTUJXS&linkCode=as2&tag=waterstore03-20&linkId=5de95dff582ba12c5f4bb38e8cccf5ff"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B075QB5HYH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B075QB5HYH&linkCode=as2&tag=waterstore03-20&linkId=6329f878b11c8bad7824cba7e4b3091c"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B075QB5HYH&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B075QB5HYH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B075QB5HYH&linkCode=as2&tag=waterstore03-20&linkId=e14948a7a643969553b7bb13747be83c">Tilly Lin Modern Accent Faux Marble Top End Table, Side Table, for Living Room, Bed Room, Black Metal Frame, Carrara</a>,
        link: "https://www.amazon.com/gp/product/B075QB5HYH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B075QB5HYH&linkCode=as2&tag=waterstore03-20&linkId=e14948a7a643969553b7bb13747be83c"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B075QBC782/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B075QBC782&linkCode=as2&tag=waterstore03-20&linkId=5a5e32d3de923b5be46a02045be80c27"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B075QBC782&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B075QBC782/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B075QBC782&linkCode=as2&tag=waterstore03-20&linkId=d3361e2c6aeb192580b0133e396429a3">Tilly Lin Modern Accent Faux Marble Top Coffee Table for Living Room, Black Metal Frame, Carrara</a>,
        link: "https://www.amazon.com/gp/product/B075QBC782/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B075QBC782&linkCode=as2&tag=waterstore03-20&linkId=d3361e2c6aeb192580b0133e396429a3"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B00MWDZRB0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MWDZRB0&linkCode=as2&tag=waterstore03-20&linkId=5d22cbed7d7a90d64070166ff68385f6"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00MWDZRB0&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B00MWDZRB0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MWDZRB0&linkCode=as2&tag=waterstore03-20&linkId=843245575f2a655ca2ce9bb88cddc92d">Rosalie Hollywood Regency Gold Steel White Marble Coffee Table</a>,
        link: "https://www.amazon.com/gp/product/B00MWDZRB0/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MWDZRB0&linkCode=as2&tag=waterstore03-20&linkId=843245575f2a655ca2ce9bb88cddc92d"
    },
    {
        category: 'motivation books journal',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B01DTF0MLY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01DTF0MLY&linkCode=as2&tag=waterstore03-20&linkId=5b6552640e9b70c1b2bb110ad0e80e6d"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01DTF0MLY&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B01DTF0MLY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01DTF0MLY&linkCode=as2&tag=waterstore03-20&linkId=86c052d68437f41682cdd356a9fd7180">Succulent Laser Cut Wood Journal (Notebook / Birthday Gift / Gratitude Journal / Handmade)</a>,
        link: "https://www.amazon.com/gp/product/B01DTF0MLY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01DTF0MLY&linkCode=as2&tag=waterstore03-20&linkId=86c052d68437f41682cdd356a9fd7180"
    },
    {
        category: 'decor',
        image: <a href="https://www.amazon.com/dp/B00S7068HY/_encoding=UTF8/ref=as_li_ss_il?coliid=I1ZPHFGF7L4VT&colid=1SLZQBZDGHDZW&psc=1&linkCode=li3&tag=waterstore03-20&linkId=24af2027a736a30deb00d410d2b5fc1a" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00S7068HY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/dp/B00S7068HY/_encoding=UTF8/ref=as_li_ss_tl?coliid=I1ZPHFGF7L4VT&colid=1SLZQBZDGHDZW&psc=1&linkCode=ll1&tag=waterstore03-20&linkId=9da49948a972e1bdc836b7092da1bbe6">Umbra Trigg Hanging Planter Vase & Geometric Wall Decor Container - Great For Succulent Plants, Air Plant, Mini Cactus, Faux Plants and More, White Ceramic/Brass (Set of 2)</a>,
        link: "https://www.amazon.com/dp/B00S7068HY/_encoding=UTF8/ref=as_li_ss_tl?coliid=I1ZPHFGF7L4VT&colid=1SLZQBZDGHDZW&psc=1&linkCode=ll1&tag=waterstore03-20&linkId=9da49948a972e1bdc836b7092da1bbe6"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B01MRSTRY8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MRSTRY8&linkCode=as2&tag=waterstore03-20&linkId=49a1136657a5cdd8edb73267398e601d"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MRSTRY8&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B01MRSTRY8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MRSTRY8&linkCode=as2&tag=waterstore03-20&linkId=ecd1479b518d352e2e47626778560a5a">Vencer 10 Inch Rectangular Modern Minimalist Ceramic Succulent Planter Pot - Window Box with Saucer,Office Desktop Potted Stand, White</a>,
        link: "https://www.amazon.com/gp/product/B01MRSTRY8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MRSTRY8&linkCode=as2&tag=waterstore03-20&linkId=ecd1479b518d352e2e47626778560a5a"
    },
    {
        category: 'decor',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B00UIT42IE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00UIT42IE&linkCode=as2&tag=waterstore03-20&linkId=bd4205265acd3ac8db937248c3a7d58b"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00UIT42IE&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B00UIT42IE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00UIT42IE&linkCode=as2&tag=waterstore03-20&linkId=2c437ec024d0fbb602b015a436bf9ecc">Set of 2 Decorative Clear Glass Globe / Hanging Air Plant Terrarium Planter / Candle Holder</a>,
        link: "https://www.amazon.com/gp/product/B00UIT42IE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00UIT42IE&linkCode=as2&tag=waterstore03-20&linkId=2c437ec024d0fbb602b015a436bf9ecc"
    },
    {
        category: 'motivation books journal',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B00GHJD3XE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GHJD3XE&linkCode=as2&tag=waterstore03-20&linkId=f95579cf3a3f99e2127827d1b5e4c29a"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00GHJD3XE&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B00GHJD3XE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GHJD3XE&linkCode=as2&tag=waterstore03-20&linkId=9f33be37c48c0b14aee2104d24b56a9a">Travel Journey Fabric Passport ID Card Holder Case Cover Purse and Passport case</a>,
        link: "https://www.amazon.com/gp/product/B00GHJD3XE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GHJD3XE&linkCode=as2&tag=waterstore03-20&linkId=9f33be37c48c0b14aee2104d24b56a9a"
    },
    {
        category: 'motivation books journal',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B01I250UTK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01I250UTK&linkCode=as2&tag=waterstore03-20&linkId=a37425cbbf1e7f879d65e84e20c107ab"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01I250UTK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B01I250UTK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01I250UTK&linkCode=as2&tag=waterstore03-20&linkId=f660f4596074bf3f84af870e480f52ba">Eat Well Travel Often Laser Cut Wood Journal -- Notebook / Birthday Gift / Gratitude Journal / Handmade</a>,
        link: "https://www.amazon.com/gp/product/B01I250UTK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01I250UTK&linkCode=as2&tag=waterstore03-20&linkId=f660f4596074bf3f84af870e480f52ba"
    },
    {
        category: 'bottle',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B01GW2HCEG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01GW2HCEG&linkCode=as2&tag=waterstore03-20&linkId=ea4ed7594a0333d212069036a3e3363a"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01GW2HCEG&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B01GW2HCEG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01GW2HCEG&linkCode=as2&tag=waterstore03-20&linkId=80ca0618a46bce55c51d2a7d03188012">Hydro Flask Vacuum Insulated Stainless Steel Water Bottle Wide Mouth with Straw Lid (White, 40-Ounce)</a>,
        link: "https://www.amazon.com/gp/product/B01GW2HCEG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01GW2HCEG&linkCode=as2&tag=waterstore03-20&linkId=80ca0618a46bce55c51d2a7d03188012"
    },
    {
        category: 'bags travel',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B00TQYYHAK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00TQYYHAK&linkCode=as2&tag=waterstore03-20&linkId=cbbeb8826719bab8993314a6cad41e12"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00TQYYHAK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B00TQYYHAK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00TQYYHAK&linkCode=as2&tag=waterstore03-20&linkId=bc6e0df12ccb732b9418bfcb716a45b8">Herschel Supply Co. Trade Small, White, One Size</a>,
        link: "https://www.amazon.com/gp/product/B00TQYYHAK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00TQYYHAK&linkCode=as2&tag=waterstore03-20&linkId=bc6e0df12ccb732b9418bfcb716a45b8"
    },
    {
        category: 'speaker',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B01F24RGZK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01F24RGZK&linkCode=as2&tag=waterstore03-20&linkId=5739cf5bf20322ddae3bc4c5c471440d"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01F24RGZK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B01F24RGZK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01F24RGZK&linkCode=as2&tag=waterstore03-20&linkId=df69f1e55c345b413b5c27cd493ce1f8">JBL Clip 2 Waterproof Portable Bluetooth Speaker (Teal)</a>,
        link: "https://www.amazon.com/gp/product/B01F24RGZK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01F24RGZK&linkCode=as2&tag=waterstore03-20&linkId=df69f1e55c345b413b5c27cd493ce1f8"
    },
    {
        category: 'bags travel',
        image: <a href="https://www.amazon.com/dp/B01BG2L27A/_encoding=UTF8/ref=as_li_ss_il?coliid=I1P0JERE2O67QE&colid=1SLZQBZDGHDZW&psc=1&linkCode=li3&tag=waterstore03-20&linkId=4f3c5b7f9866c68fc0e0ff1f2a18b5ae" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01BG2L27A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/dp/B01BG2L27A/_encoding=UTF8/ref=as_li_ss_tl?coliid=I1P0JERE2O67QE&colid=1SLZQBZDGHDZW&psc=1&linkCode=ll1&tag=waterstore03-20&linkId=65d8ae1353ea0b9bcca22877a7138412">Origami Unicorn TUO -Travel Undergarment Organizer – New Packing Solution</a>,
        link: "https://www.amazon.com/dp/B01BG2L27A/_encoding=UTF8/ref=as_li_ss_tl?coliid=I1P0JERE2O67QE&colid=1SLZQBZDGHDZW&psc=1&linkCode=ll1&tag=waterstore03-20&linkId=65d8ae1353ea0b9bcca22877a7138412"
    },
    {
        category: 'photography watches',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B01C80O0ZU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01C80O0ZU&linkCode=as2&tag=waterstore03-20&linkId=6756968594a68023dd29be506ec27fae"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01C80O0ZU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B01C80O0ZU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01C80O0ZU&linkCode=as2&tag=waterstore03-20&linkId=d9dd71556f3203a4327f9546ed9d7cbb">GoPro HERO Session</a>,
        link: "https://www.amazon.com/gp/product/B01C80O0ZU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01C80O0ZU&linkCode=as2&tag=waterstore03-20&linkId=d9dd71556f3203a4327f9546ed9d7cbb"
    },
    {
        category: 'bags travel mens',
        image: <a target="_blank"  href="https://www.amazon.com/gp/product/B0077CLW8I/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0077CLW8I&linkCode=as2&tag=waterstore03-20&linkId=79f2be59e4e52742535a1361503b0149"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0077CLW8I&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=waterstore03-20" /></a>,
        title: <a className="products-title" target="_blank" href="https://www.amazon.com/gp/product/B0077CLW8I/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0077CLW8I&linkCode=as2&tag=waterstore03-20&linkId=2bfedfe1a4994f825bf97809164bb398">Herschel Supply Co. Strand, Black, One Size</a>,
        link: "https://www.amazon.com/gp/product/B0077CLW8I/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0077CLW8I&linkCode=as2&tag=waterstore03-20&linkId=2bfedfe1a4994f825bf97809164bb398"
    },
    {
        category: '',
        image: '',
        title: '',
        link: ''
    },
]



class ProductGenerator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            homePage: this.props.homePage,
            param: this.props.param
        }
    }


    productCreator(par, home) {                
        var param = par ? par : window.location.pathname.split('/')[1]
        var productsArray = []
        products.forEach((elem, i) => {
            if (elem.category.includes(param)) {
               productsArray.push (
                    <div key={i} className="products-div">
                        {elem.image}
                        <span>{elem.title}</span>
                        {home ? null :<a target="_blank" className="products-buy-button" href={`${elem.link}`}>BUY NOW</a>}
                    </div>
                )
            }
        })
        if( home === true){
            return productsArray.slice(0, 4)
        } else {
            return productsArray            
        }

    }


    render() {
        return (
            <div style={{marginTop: '80px'}}>          
                {this.productCreator(this.props.param, this.props.homePage)}                
            </div>
        );
    }
}

export default ProductGenerator;
