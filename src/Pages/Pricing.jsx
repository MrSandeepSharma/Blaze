import React from 'react'

import {LinkButton} from '../components/Button'

import { CiUser, CiSearch, CiCloudOn } from "react-icons/ci";
import { IoIosSend, IoMdPaper, IoIosSync } from "react-icons/io";
import { RiVoiceprintLine, RiEdgeNewLine } from "react-icons/ri";
import { GrAnnounce, GrIntegration } from "react-icons/gr";
import { TfiStatsUp } from "react-icons/tfi";
import { LuUsers2 } from "react-icons/lu";
import { GoFileDirectory, GoDatabase, GoGear } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { TbIcons } from "react-icons/tb";
import { SiIconify } from "react-icons/si";
import { MdErrorOutline, MdDone } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

import creatorPlanImg from "../assets/creator-plan.png"
import teamPlanImg from "../assets/team-plan.png"
import enterpricePlanImg from "../assets/enterprice-plan.png"

function Pricing() {

  const allPlans = [
    {
      type: creatorPlanImg,
      alt: "creator plan",
      color: "#FFFAD3",
      price: "$20",
      originalPrice: "25",
      desc: "Creator plan includes:",
      includes: [
        {
          icon: <CiUser />,
          text: "1 Seat"
        },
        {
          icon: <IoIosSend />,
          text: "Unlimited guest access to docs & projects"
        },
        {
          icon: <RiVoiceprintLine />,
          text: "3 Brand Voices"
        },
        {
          icon: <RiEdgeNewLine />,
          text: "Unlimited AI Generation"
        },
        {
          icon: <GrAnnounce />,
          text: "Unlimited Multi-channel Campaigns"
        },
        {
          icon: <IoMdPaper />,
          text: "Unlimited Docs & Projects"
        },
        {
          icon: <TfiStatsUp />,
          text: "Unlimited SEO Checks"
        },
        {
          icon: <CiSearch />,
          text: "Unlimited Plagiarism Scans"
        },
      ]
    },
    {
      type: teamPlanImg,
      alt: "team plan",
      color: "#B8E7FC",
      price: "$47",
      originalPrice: "59",
      desc: "Everything in Creator, plus:",
      includes: [
        {
          icon: <LuUsers2 />,
          text: "3 seats (+$25/additional seat)"
        },
        {
          icon: <RiVoiceprintLine />,
          text: "10 Brand Voices"
        },
        {
          icon: <RiEdgeNewLine />,
          text: "Priority AI Processing"
        },
        {
          icon: <IoMdPaper />,
          text: "Real-time Collaboration, Comments, & Tasks"
        },
        {
          icon: <IoIosSync />,
          text: "Document Review & Approval Workflows"
        },
        {
          icon: <GoFileDirectory />,
          text: "Wiki & Documentation Features"
        },
        {
          icon: <GoDatabase />,
          text: "Databases, Calendars, and Kanban Boards"
        },
        {
          icon: <GrIntegration />,
          text: "Integrations: Zapier, Slack, and more."
        },
      ]
    },
    {
      type: enterpricePlanImg,
      alt: "enterprice plan",
      color: "#FFFAD3",
      price: "$500",
      originalPrice: "530",
      desc: "Everything in Team, plus:",
      includes: [
        {
          icon: <LuUsers2 />,
          text: "Includes 20+ users"
        },
        {
          icon: <FiLogOut />,
          text: "SSO/SAML Login"
        },
        {
          icon: <TbIcons />,
          text: "Custom AI templates"
        },
        {
          icon: <SiIconify />,
          text: "Dedicated Account Manager"
        },
        {
          icon: <MdErrorOutline />,
          text: "Tailored Training Sessions"
        },
        {
          icon: <GoGear />,
          text: "Workflow Setup"
        },
        {
          icon: <CiCloudOn />,
          text: "User Provisioning via SCIM"
        },
        {
          icon: <IoHomeOutline />,
          text: "Multiple Workspaces"
        },
        {
          icon: <MdDone />,
          text: "API Access"
        },
      ]
    }
  ]

  return (
    <main className='pricing container'>
      <section className='pricing__hero'>
        <h1>the signal is calling. <span>start your trial today!</span></h1>
      </section>
      <section className='pricing__plans'>
        {
          allPlans.map(plan => (
            <div key={plan.alt} style={{backgroundColor: plan.color}} className='plan__container_wrapper'>
              <div className='plan__container'>
                <img src={plan.type} alt={plan.alt} width="450" height="83" />
                <div className="flex-container">
                  <p className="plan__price">{plan.price}</p>
                  <div className='plan__detail'>
                    <p>Per Month</p>
                    <p>Billed Annually</p>
                  </div>
                </div>
                <p className="plan__originalprice">${plan.originalPrice}/ Billed Monthly</p>
                <LinkButton className='plan__cta btn-hover' text="Try For Free" />
                <p className="plan__desc">{plan.desc}</p>
                <ul>
                  {plan.includes.map(item => (
                    <li key={item.text} className='flex-container list__item'>
                      {item.icon}
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default Pricing
