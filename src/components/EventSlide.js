import Image from "next/image"
import { Kodchasan } from "next/font/google"
import { useEffect, useRef } from "react";

const kodchasan = Kodchasan({
  weight: '700',
});

export default function EventSlide({img, title, desc}){
  const card = useRef(null);
  useEffect(()=>{

    // Add an event listener for when the mouse moves over the card
    card.current.parentElement.addEventListener('mousemove', (e) => {
        // Get the card's size and position relative to the viewport
        const cardRect = card.current.getBoundingClientRect();
        
        // Calculate the position of the mouse relative to the card's top-left corner
        const x = e.clientX - cardRect.left; // X coordinate within the card
        const y = e.clientY - cardRect.top;  // Y coordinate within the card
        
        // Find the center of the card
        const centerX = cardRect.width / 2;
        const centerY = cardRect.height / 2;
        
        // Calculate the rotation angles based on mouse position
        // Multiply by 15 for a stronger tilt effect
        const rotateX = ((y - centerY) / centerY) * 20; // Tilt on the X-axis (up and down)
        const rotateY = ((centerX - x) / centerX) * 20; // Tilt on the Y-axis (left and right)
        
        // Apply the calculated rotation to the card
        card.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Add an event listener for when the mouse leaves the card area
    card.current.parentElement.addEventListener('mouseleave', () => {
        // Reset the card's rotation when the mouse leaves
        card.current.style.transform = 'rotateX(0) rotateY(0)';
    });
  }, [])


  return (
    <div className="m-4 p-[2px] h-full max-w-[300px] mx-auto">
      <div className="rounded-3xl bg-gradient-to-b from-yellow-500 via-transparent p-[2px] to-transparent h-full w-full event-tile"  ref={card}>
        <div className="rounded-3xl p-4 h-full">
          <div className="w-full h-1/2 relative mb-2 image">
            <Image src={img} fill={true} className="rounded-xl" alt="Decoration" />
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center items-center text-center">
            <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
            <span className="w-full h-[1px] bg-gradient-to-r from-transparent to-transparent via-yellow-500 my-1"></span>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}