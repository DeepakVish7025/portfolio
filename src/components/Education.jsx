import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CommandButton from './kokonutui/command-button'

const EducationSection = () => {
  return (
    <>
      <div className="py-4">
        <Card className="bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md p-6 mr-4 ml-4 md:ml-0">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl font-bold">Education</CardTitle>
            <p className="text-muted-foreground text-sm">
              Academic Background & Professional Learning
            </p>
          </CardHeader>
          <CardContent className="mt-4 space-y-6">
            {/* B.Tech */}
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="text-xl font-semibold">Bachelor of Technology (B.Tech)</h3>
              <p className="text-muted-foreground text-sm mt-1">Computer Science & Engineering</p>
              <p className="text-sm mt-2 text-muted-foreground">Prasad Institute Of Technology Jaunpur</p>
              <p className="text-sm text-muted-foreground">2022-2026</p>
            </div>

            {/* Intermediate */}
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="text-xl font-semibold">Intermediate (12th)</h3>
              <p className="text-muted-foreground text-sm mt-1">Science Stream</p>
              <p className="text-sm mt-2 text-muted-foreground">M.D.I.C Jaunpur</p>
              <p className="text-sm text-muted-foreground">2022</p>
            </div>

            {/* High School */}
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="text-xl font-semibold">High School (10th)</h3>
              <p className="text-sm mt-2 text-muted-foreground">M.K.I.C Jaunpur</p>
              <p className="text-sm text-muted-foreground">2020</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="pb-4">
        <Card className="bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md p-6 mr-4 ml-4 md:ml-0">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold">Online Courses & Mentorship</CardTitle>
            <p className="text-muted-foreground text-sm">
              Continuous learning through industry experts
            </p>
          </CardHeader>
          <CardContent className="mt-4 space-y-6">
            {/* MERN Stack Course */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                  <i className="ri-code-box-line text-2xl text-primary"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">MERN Stack Development</h3>
                  <p className="text-sm text-muted-foreground mt-1">Coder Army</p>
                  <p className="text-sm mt-2">
                    Mentor: Rohit Negi<span className="font-medium">Ex-Employee at Uber</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Comprehensive full-stack development training covering MongoDB, Express.js, React.js, and Node.js
                  </p>
                </div>
              </div>
            </div>

            {/* DSA Course */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                  <i className="ri-git-branch-line text-2xl text-primary"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Data Structures & Algorithms in C++</h3>
                  <p className="text-sm text-muted-foreground mt-1">Coder Army</p>
                  <p className="text-sm mt-2">
                    Mentor: Rohit Negi<span className="font-medium">Ex-Employee at Uber</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    In-depth problem solving and algorithmic thinking with C++
                  </p>
                </div>
              </div>
            </div>

            {/* High Level Design Course */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                  <i className="ri-layout-line text-2xl text-primary"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">High Level Design (HLD)</h3>
                  <p className="text-sm text-muted-foreground mt-1">System Design & Architecture</p>
                  <p className="text-sm mt-2">
                    Mentor: <span className="font-medium">Aditya Tandon, SDE at Ola</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Learning scalable system architecture, design patterns, and building robust distributed systems
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="pb-4">
        <Card className="bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md p-6 mr-4 ml-4 md:ml-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Key Skills Acquired</CardTitle>
          </CardHeader>
          <CardContent className="pb-4 flex flex-wrap justify-center gap-4">
            <CommandButton><i className="ri-reactjs-fill mr-2"></i>React.js</CommandButton>
            <CommandButton><i className="ri-nodejs-fill mr-2"></i>Node.js</CommandButton>
            <CommandButton>Express</CommandButton>
            <CommandButton>MongoDB</CommandButton>
            <CommandButton>Data Structures</CommandButton>
            <CommandButton>Algorithms</CommandButton>
            <CommandButton>System Design</CommandButton>
            <CommandButton>C++</CommandButton>
            <CommandButton>Problem Solving</CommandButton>
            <CommandButton>Architecture Patterns</CommandButton>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default EducationSection