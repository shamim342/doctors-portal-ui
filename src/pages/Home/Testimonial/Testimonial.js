import React from 'react';
import './Testimonial.css';
import { Container } from '@mui/system';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import bg from '../../../assets/icons/quote.svg';


const Testimonial = () => {
    return (
        <div className="Testimonial-section">
            <img className='Testimonial-quate'width="100px" height="100px" src={bg} alt="" />
            <div className="Testimonial-section">
                <div className="Testimonial-heading">
                    <h5 style={{ color: "#19D3AE" }}> Testimonial </h5>
                    <h4>What Our Patients Says</h4>
                </div>
                <Container>
                <div className='Testimonial-container'>
                    <div className="Testimonial-item">
                        <div style={{ textAlign: "justify", fontSize: '.7em', margin: "0 1em " }}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</div>
                        <div className='testimonial-contain-sm'>
                            <div>
                                <img className='testimonial-img' src={people1} alt="" />
                            </div>
                            <div style={{marginLeft:"1em"}}>
                                <div style={{fontSize:"1em"}}>Winson Herry</div>
                                <div style={{fontSize:".7em"}}>California</div>
                            </div>

                        </div>
                    </div>
                    <div className="Testimonial-item">
                        <div style={{ textAlign: "justify", fontSize: '.7em', margin: "0 1em " }}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</div>
                        <div className='testimonial-contain-sm'>
                            <div>
                                <img className='testimonial-img' src={people2} alt="" />
                            </div>
                            <div style={{marginLeft:"1em"}}>
                                <div style={{fontSize:"1em"}}>Winson Herry</div>
                                <div style={{fontSize:".7em"}}>California</div>
                            </div>

                        </div>
                    </div>
                    <div className="Testimonial-item">
                        <div style={{ textAlign: "justify", fontSize: '.7em', margin: "0 1em " }}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</div>
                        <div className='testimonial-contain-sm'>
                            <div>
                                <img className='testimonial-img' src={people3} alt="" />
                            </div>
                            <div style={{marginLeft:"1em"}}>
                                <div style={{fontSize:"1em"}}>Winson Herry</div>
                                <div style={{fontSize:".7em"}}>California</div>
                            </div>

                        </div>
                    </div>
                </div>
                </Container>
                {/* <Box sx={{ flexGrow: 1 }}>
                    <Container>
                    <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
                        <Grid item xs={12} md={4}  className="Testimonial-item">

                            <div style={{textAlign:"justify", fontSize:'.7em' , margin:"0 1em "}}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</div>
                            <div className='testimonial-contain-sm'>
                                <div>
                                    <img className='testimonial-img' src={people1} alt="" />
                                </div>
                                <div >
                                    <h5>Winson Herry</h5>
                                    <h6>California</h6>
                                </div>

                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}  className="Testimonial-item">

                            <div style={{textAlign:"justify", fontSize:'.7em' , margin:"0 1em "}}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</div>
                            <div className='testimonial-contain-sm'>
                                <div>
                                    <img className='testimonial-img' src={people1} alt="" />
                                </div>
                                <div >
                                    <h5>Winson Herry</h5>
                                    <h6>California</h6>
                                </div>

                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}  className="Testimonial-item">

                            <div style={{textAlign:"justify", fontSize:'.7em' , margin:"0 1em "}}>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</div>
                            <div className='testimonial-contain-sm'>
                                <div>
                                    <img className='testimonial-img' src={people1} alt="" />
                                </div>
                                <div >
                                    <h5>Winson Herry</h5>
                                    <h6>California</h6>
                                </div>

                            </div>
                        </Grid>
                    </Grid>
                    </Container>
                </Box> */}
            </div>
        </div>
    );
};

export default Testimonial;