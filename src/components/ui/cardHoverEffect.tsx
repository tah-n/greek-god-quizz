import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { questions } from "../lib/materials";
import { toast } from "react-toastify";
import Result from "../Result";
import { useStart } from '../lib/useStore';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    question: string;
    options: {
        answer: string,
        god: string
    }[];
    answer: string;
    god: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedAnswer,setSelectedAnswer] = useState<(string | null)[]>(new Array(questions.length).fill(null));
  const {resultGod,setResultGod} = useStart();
  const cardsRef = useRef<HTMLDivElement[]>([]);

 const handleSubmit = () => {
    if(selectedAnswer.includes(null)){
        toast.warn("You haven't answered all the questions.");
        return;
    }else {
        const result = countMostFrequent(selectedAnswer);
        setResultGod(result);
    }
    
 }

const countMostFrequent = (arr:string[]): string => {
    const counts = arr.reduce<Record<string,number>>((acc, idx) => {
        acc[idx] = (acc[idx] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b))
}

  const handleSelected = (idx: number,god:string) => {
    const newSelectedAnswers = [...selectedAnswer];
    newSelectedAnswers[idx] = god;
    setSelectedAnswer(newSelectedAnswers);
  }

  useGSAP(() => {
    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 20,
      stagger: 0.6,
      duration: 0.6,
      ease: "power1.Out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 90%",
        toggleActions: 'play none none none'
      }
    })

    gsap.to("#button", {
      scale: 0.9,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      duration: 1.2,
      paused: true,
      scrollTrigger: {
        trigger: '#button',
        start: 'top 90%',
        toggleActions: "play none none none"
      }
    })

  },[])


  if(resultGod !== '') {
    return (
      <Result />
    )
  }
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:w-[60%] w-[80%] py-10 z-50",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          ref={(el) => (cardsRef.current[idx] = el!)}
          key={idx}
          className="relative group block p-2 h-full w-full opacity-0"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-pink-200/30 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <h1 className="font-mono text-xl md:text-2xl text-cream-200 mb-4 font-semibold">{item.question}</h1>
            {item.options.map((answer) => (
                <div className="form-group md:text-lg text-[1rem] font-mono leading-6 tracking-tighter mb-4 text-cream-300/70">
                <input 
                    type="checkbox" 
                    id="ans" 
                    className="mr-2 appearance-none w-4 h-4 border rounded-sm border-cream-300 cursor-pointer checked:bg-white" 
                    onChange={() => handleSelected(idx, answer.god)}
                    checked={selectedAnswer[idx] === answer.god}
                    />
                <label htmlFor="ans">
                    {answer.answer}
                </label>
                <br/>
                </div>
            ))}
          </Card>
        </div>
      ))}
      <button 
      id="button"
      className='bg-cream-400 text-blue-1 h-20 md:p-4 rounded-3xl transition-all hover:bg-cream-400/80 mt-8 font-extrabold w-full md:w-[80%] p-2 text-2xl cursor-pointer font-mono active:bg-cream-400/50 m-auto'
      onClick={handleSubmit}>
        Ready For Results?
      </button>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-blue-1 border-2 border-pink-300/30 dark:border-white/[0.2] group-hover:border-slate-700 backdrop-blur-md relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

