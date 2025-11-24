import React from 'react';

const Marquee = () => {
  return (
    <>
      <div className="marquee-container right overflow-hidden relative mx-auto mb-[100px] whitespace-nowrap rotate-[5deg] z-[2] bg-primary-alt top-[130px]">
        <div className="marquee-content inline-block whitespace-nowrap animate-[right-marquee_12s_linear_infinite]">
          {Array(20).fill('⚠️ DANGER ').map((text, i) => (
            <span key={i} className="inline-block pr-[10px] text-[1.5rem] font-bowlby">{text}</span>
          ))}
        </div>
        <div className="marquee-content inline-block whitespace-nowrap animate-[right-marquee_12s_linear_infinite] absolute top-0">
           {Array(20).fill('⚠️ DANGER ').map((text, i) => (
            <span key={i} className="inline-block pr-[10px] text-[1.5rem] font-bowlby">{text}</span>
          ))}
        </div>
      </div>
      
      <div className="marquee-container left overflow-hidden relative mx-auto mb-[100px] whitespace-nowrap -rotate-[5deg] bg-primary">
        <div className="marquee-content inline-block whitespace-nowrap animate-[left-marquee_12s_linear_infinite]">
          {Array(20).fill('SIZZLING CONTENT AHEAD ').map((text, i) => (
            <span key={i} className="inline-block pr-[10px] text-[1.5rem] font-bowlby">{text}</span>
          ))}
        </div>
        <div className="marquee-content inline-block whitespace-nowrap animate-[left-marquee_12s_linear_infinite] absolute top-0">
          {Array(20).fill('SIZZLING CONTENT AHEAD ').map((text, i) => (
            <span key={i} className="inline-block pr-[10px] text-[1.5rem] font-bowlby">{text}</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes right-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes left-marquee {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </>
  );
};

export default Marquee;
