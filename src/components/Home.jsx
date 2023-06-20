import React from "react";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <section
        className="banner"
        style={{ backgroundImage: "url('assets/banner-bg.png')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8 order-md-first order-last">
              <h1>One platform to communicate, collaborate and accelerate</h1>
              <p>
                Slikk helps you get more tasks done in less time. It's
                everything you need to work faster, collaborate better, and
                improve productivity at your workplace.
              </p>
              <div className="icon_group_wrap">
                <div className="icon_group d-flex align-items-center">
                  <h3>50%</h3>
                  <img src="assets/downarrow.png" />
                  <h6>Calls and Meetings</h6>
                </div>
                <div className="icon_group d-flex align-items-center">
                  <h3>45%</h3>
                  <img src="assets/uparrow.png" />
                  <h6>Goals Achieved</h6>
                </div>
                <div className="icon_group d-flex align-items-center">
                  <h3>3X</h3>
                  <h6>Productivity</h6>
                </div>
              </div>
              <div className="btn-group flex-wrap">
                <a href="#" className="btn btn-yellow">
                  Start Your Free Trial
                </a>
                <a href="#" className="btn btn-white">
                  Get A Live Demo
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 img-col">
              <img
                src="assets/Hero Section Graphic.svg"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="work-sec">
        <div className="container">
          <h2 className="main-title text-center">
            Add visibility to your work
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="circle-icon-box text-center">
                <img src="assets/Icon open-graph.svg" />
                <p>Work & Forecasting</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="circle-icon-box text-center">
                <img src="assets/Icon material-group-work.svg" />
                <p>Collaboration Pods</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="circle-icon-box text-center">
                <img src="assets/Icon metro-flow-tree.svg" />
                <p>Strategic Workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="right-img-sec img-content-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-md-first order-last">
              <div className="content">
                <h3 className="subtitle">Time Management</h3>
                <p>
                  Find and fix anything that eats time. Lavender continuously
                  learns what time works best for you. The dashboard helps you
                  schedule time, manage team capacity, organize global
                  calendars, and track milestones at work. It also shows the
                  current status of projects and where you can make changes to
                  reduce the workload.
                </p>
                <a href="#" className="btn main-btn">
                  Know More
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="img text-center text-md-end">
                <img src="assets/time-management.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="left-img-sec img-content-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="img text-center text-md-start">
                <img src="assets/task-management.png" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="content">
                <h3 className="subtitle">Task Management</h3>
                <p>
                  Teamleap is trained to find and organize tasks in terms of
                  their priority. Each task has a workflow that shows the brief,
                  stakeholders, and deadlines. If the requirement changes
                  anytime, all the assignments get shuffled accordingly. You
                  also have other options like easy search, recurring tasks, and
                  multitask toolbar.
                </p>
                <a href="#" className="btn main-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="right-img-sec img-content-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-md-first order-last">
              <div className="content">
                <h3 className="subtitle">Kanban</h3>
                <p>
                  Setup in minutes, streamline your work and boost the
                  productivity of your teams. Manage your projects with better
                  task routing and easy workload planning. With intuitive intake
                  forms and customizable workflows, your team can release
                  quality products in less time.
                </p>
                <a href="#" className="btn main-btn">
                  Know More
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="img text-center text-md-end">
                <img src="assets/kanban.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="left-img-sec img-content-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="img text-center text-md-start">
                <img src="assets/create-save-share.png" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="content">
                <h3 className="subtitle">Create. Save. Share.</h3>
                <p>
                  Most digital assets get dropped into some random folder
                  without a central storage location. Now, have all your files
                  in one secure cloud storage to maintain brand consistency and
                  repurpose at scale. Plus, keep things regulated with simple
                  permission settings.
                </p>
                <a href="#" className="btn main-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-sec">
        <div className="container">
          <h2 className="main-title text-center">Testimonials</h2>
          <div className="testimonial-carousel">
            <Testimonial/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
