import React from 'react';
import Card from './card'

import { motion } from 'framer-motion'

import algo from '../icons/algo.svg'
import api from '../icons/api.svg'
import repair from '../icons/repair.svg'
import computer from '../icons/computer.svg'
import ux from '../icons/ux.svg'
import puzzle from '../icons/puzzle.svg'
import db from "../icons/db.png"




const About = () => {
    const aboutVariants = {
        initial: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1, duration: 0.7
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }



    return (
        <motion.div className='content_section'
            variants={aboutVariants}
            initial='initial'
            animate='visible'
            exit='exit'

        >
            <div className='description'>
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
                </div>
            <div className="data_section">
                <div className="container">
                    <p className='sub_heading'>
                        What I know
                        </p>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={computer} title="Frontend Development" body={["I can built a beautiful webapplications using ", <strong>HTML,CSS</strong>, " and ", <strong>React.js</strong>]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={repair} title="Backend  Development" body={["handle database, server, api using ", <strong> nodejs , express </strong>, " and ", <strong> Mongodb </strong>]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={api} title="API Development" body={["develop robust REST API using ", <strong> express framework </strong>]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={ux} title="Design and Animation" body={["I am learning to add some cool ", <strong>design</strong>, " and ", <strong>animation</strong>, " to the frontend. "]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={db} title="Database" body={["I can handle the integration of database with frontend using ", <strong>MongoDB</strong>]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={puzzle} title="Chess Player (mm ..Hobby :))" body={["you will not regret playing with me."]} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;