const testimonials= [
    {
        imgUrl: "https://randomuser.me/api/portraits/men/28.jpg",
        txt: "I am extremely satisfied with my recent purchase from BechaKena.com. Their wide range of high-quality mobile accessories exceeded my expectations. The fast shipping and excellent customer service truly make them stand out in the market.",
        name:  "Bob Jackman",
    },
    {
        imgUrl : "https://randomuser.me/api/portraits/men/22.jpg",
        txt: "BechaKena.com offers a wide range of high-quality mobile accessories, including cases, chargers, and headphones. Their products are stylish, durable, and affordable. I am impressed with the variety and customer service provided by BechaKena.com.",
        name:  "Johan"
    },
    {
        imgUrl : "https://randomuser.me/api/portraits/men/47.jpg",
        txt: "I am beyond impressed with the quality of mobile accessories I purchased from BechaKena.com. Their products are innovative, durable, and stylish. I highly recommend BechaKena.com to anyone looking for top-notch mobile accessories.",
        name:  "Muhammad Abir"
    },
    {
        imgUrl : "https://randomuser.me/api/portraits/men/61.jpg",
        txt: "I am extremely satisfied with BechaKena.com! Their wide range of high-quality mobile accessories exceeded my expectations. The fast shipping and excellent customer service truly made my shopping experience enjoyable. I highly recommend BechaKena.com to anyone searching for top-notch mobile accessories.",
        name:  "Freddy Alkam",
    },
    {
        imgUrl : "https://randomuser.me/api/portraits/men/69.jpg",
        txt: "I am truly impressed with the diverse range of mobile accessories offered by BechaKena.com. The quality and durability of their products exceeded my expectations. Shopping with BechaKena.com was a seamless experience, and I highly recommend them to all tech enthusiasts.",
        name:  "Rick Nan",
    }
];

let idx = 0, len = testimonials.length;

const img = document.getElementById("img");
const text = document.getElementById("txt");
const namee = document.getElementById("name");

udpateTestimonial();
function udpateTestimonial() {
    
    const {imgUrl, txt, name } = testimonials[idx];
    img.src = imgUrl;
    text.textContent = txt;
    namee.textContent = name;

    idx = (idx + 1) % len;

    setTimeout(() => {
        udpateTestimonial();
    }, 3000);
};
