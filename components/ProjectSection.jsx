"use client"
import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { InView, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
    rootMargin: '-50px 0px 0px 0px', // Adjust the root margin to trigger the animation when the component's top is in view
  });
  const cardVariants = {
    initial: { opacity: 1, y: 5 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const [tag, setTag] = useState("ALL");
  const [animationRanForAll, setAnimationRanForAll] = useState(false);
  const [animationRanForHTMLCSS, setAnimationRanForHTMLCSS] = useState(false);
  const [animationRanForReact, setAnimationRanForReact] = useState(false);

  const handleTagChange = (newTag) => {
    switch (newTag) {
      case 'ALL':
        if (!animationRanForAll) {
          setAnimationRanForAll(true);
        }
        break;
      case 'HTML/CSS':
        if (!animationRanForHTMLCSS) {
          setAnimationRanForHTMLCSS(true);
        }
        break;
      case 'React':
        if (!animationRanForReact) {
          setAnimationRanForReact(true);
        }
        break;
      default:
        break;
    }

    setTag(newTag);
  };

  const Project_Data = [
    {
      id: "1",
      title: "airbnb",
      description: "airbnb clone website this website is company own website.Technology used in Next js,context Api,TypeScript,Book room advance many more feature like filter,new calendar included stripe payments,google",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "/images/airbnb.png",
      github: "#",
      demoUrl: "https://airbnbclone.henceforthsolutions.com/",
    },
    {
      id: "2",
      title: "E-commerce Website",
      description: "Working in the Incubation Team & made a E-Commerce which was developed using React Js, and TypeScript libraries. It included the many feature like Stripe payments , add carts direct Google pay method",
      tag:["ALL", "HTML/CSS"],
      imageUrl: "/images/project1.png",
      github: "/",
      demoUrl: "https://sharedecommerce.henceforthsolutions.com/",
    },
    {
      id: "3",
      title: "E-commerce Site",
      description: "Working in the Incubation Team & made a E-Commerce which was developed using Next Js, and TypeScript libraries. It included the many feature like Stripe payments and Forum or Chating system,Live Streaming Ststem(Agora) , add carts direct Google pay method",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "/images/Q.png",
      github: "/",
      demoUrl: "https://quantitysavers.com/",
    },
    {
      id: "4",
      title: "Kunfirm Website && Admin",
      description: "Working on Kunfirm Website && Admin this website is basically Loaning system there two type of users like Lander and Borrower .Techonology used Next Js,TypeScript,Context Api",
      tag: ["ALL", "React"],
      imageUrl: "/images/Kun.png",
      github: "/",
      demoUrl: "https://kunfirm.me/",
    },
    {
      id: "5",
      title: "ClicksPert Provider && Admin",
      description: "Working on Clickspert provider there is many more feature like there is different type of Service that means add service in admin like Cleaning, windows Cleaning for example like any go to home and service the room.Techonology used Next Js,TypeScript,Context Api",
      tag: ["ALL", "React"],
      imageUrl: "/images/click.png",
      github: "/",
      demoUrl: "https://vendor.clickspert.co",
    },
    {
      id: "6",
      title: "Richelieu Website",
      description: "This is NFT Based project.Techonology used Typescript,Next Js,Context Api,Antd Desgin.",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "/images/Re.png",
      github: "",
      demoUrl: "https://richelieu.finance/",
    },
    {
      id: "7",
      title: "Lancha Webisite ",
      description: "Working on Lancha Salvador website this website working on book boat mostly important features like slot book in advance included new features like Calender,Technology Used Next Js,Context. ",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "/images/Lancha.png",
      github: "",
      demoUrl: "https://aluguel.lanchasalvador.com.br/",
    },
    {
      id: "8",
      title: "Creative Golf Landing Page",
      description: "Responsive digital agency clone landing page",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "/images/8.jpg",
      github: "",
      demoUrl: "https://creativegolflanding.netlify.app/",
    },
    {
      id: "9",
      title: "Pizza Clone Landing Page",
      description: "Responsive Pizza clone landing page",
      tag: ["ALL", "HTML/CSS"],
      imageUrl: "/images/8.jpg",
      github: "",
      demoUrl: "https://creativegolflanding.netlify.app/",
    },
  ];

  const filteredProject = Project_Data.filter((project) => project.tag.includes(tag));

  return (
    <>
      <section id="projects" className="my-5 bg-black backdrop-blur-lg p-4 rounded-lg">
        <div className="my-3 p-3 h-auto w-auto">
          <h2 className="mb-6 text-center text-4xl text-white font-extrabold">My Projects</h2>
          <div className="my-5 relative w-full flex flex-wrap sm:flex-nowrap items-center justify-center gap-4">
            <ProjectTag onClick={handleTagChange} name="ALL" isSelected={tag === "ALL"} />
            {/* <ProjectTag onClick={handleTagChange} name="HTML/CSS" isSelected={tag === "HTML/CSS"} />
            <ProjectTag onClick={handleTagChange} name="React" isSelected={tag === "React"} /> */}
          </div>

          <ul className="mb-5 grid md:grid-cols-3 text-white gap-5 lg:gap-10">
            {filteredProject.map((project, index) => (
              <motion.li
                ref={ref}
                key={index}
                variants={cardVariants}
                initial={getAnimationInitialState(project.tag)}
                animate={inView ? 'animate' : 'initial'}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tag={project.tag}
                  imageUrl={project.imageUrl}
                  github={project.github}
                  demoUrl={project.demoUrl}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );

  function getAnimationInitialState(tags) {
    switch (tags[0]) {
      case 'ALL':
        return animationRanForAll ? 'animate' : 'initial';
      case 'HTML/CSS':
        return animationRanForHTMLCSS ? 'animate' : 'initial';
      case 'React':
        return animationRanForReact ? 'animate' : 'initial';
      default:
        return 'initial';
    }
  }
};

export default ProjectSection;
