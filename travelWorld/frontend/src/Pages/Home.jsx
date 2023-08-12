import React from 'react'
import './css/home.css';
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from '../shared/Subtitle';
import './css/home.css';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedToursList from '../components/FeaturedToursList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    // hero section starts here
    <>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__Content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={"Know Before You Go"}/>
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Traveling opnes the door to creating <span className="highlight">memories</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque unde, placeat dolores eos natus eius quibusdam officia ad ullam ab error voluptate architecto ex.</p>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-4">
                            <video src={heroVideo} alt="" controls/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt="" />
                        </div>
                    </Col>

                    <SearchBar/>
                </Row>
            </Container>
        </section>
        {/* hero section ends */}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">What we serve</h5>
                        <h5 className="services__title">We offer our best services</h5>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>

        {/* featured tour section starts */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <Subtitle subtitle={'Explore'} />
                        <h2 className="featured__tour-title">Our Featured Tours</h2>
                    </Col>
                    <FeaturedToursList />
                </Row>
            </Container>
        </section>
        {/* featured tour section ends */}

        {/* experienced section starts */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience__content">
                            <Subtitle subtitle={'Experience'}/>
                            <h2>With our all experience<br /> We will Serve you</h2>
                            <p>Lorem ipsum dolor sit amet.<br/>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>5k+</span>
                                <h6>Regular Clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Years Experience</h6>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6'>
                        <div className="experience__img">
                            <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* experienced section ends */}

        {/* gallery section starts */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={"Gallery"}/>
                        <h2 className='gallery__title'>
                            Visit our Customers tour Gallery
                        </h2>
                    </Col>
                    <Col lg='12'>
                        <MasonryImagesGallery/>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* gallery section ends */}

        {/* testimonial section starts */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Fans Love'}/>
                        <h2 className="testimonial__title">What are fans say about us</h2>
                    </Col>

                    <Col lg='12'>
                        <Testimonials />
                    </Col>
                </Row>
            </Container>
        </section>
        {/* testimonial section ends */}

        {/* Newsletter section starts */}
        <Newsletter />
        {/* Newsletter section ends */}
    </>
  )
}

export default Home
