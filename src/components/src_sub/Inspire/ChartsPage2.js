import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import './style.css';

class ChartsPage2 extends React.Component {
  state = {
    dataHorizontal: {
      labels: ['Stress from work', 'Too tired for sex', 'Low libido/sex drive',
    'Arguments about money', 'You are a daybird, they are a night owl',
    'Long term health problems', 'Short term health problems', 'Boring sex', 'Erectile Dysfunction',
    'Arguments about your children', 'Failure to achieve orgasm', 'After one of you has had a baby',
    'Porn', 'Premature Ejaculation', 'Infidelity', 'Arguments about politics'],
      datasets: [
        {
          label: 'See Issues',
          data: [35, 33, 28, 27, 20, 18, 16, 15, 14, 12, 11, 8, 8, 7, 6, 5, 0],
          fill: false,
          backgroundColor: [
            'rgba(239, 95, 84, 1)',
            'rgba(241, 103, 93, 1)',
            'rgba(242, 112, 102, 1)',
            'rgba(242, 120, 108, 1)',
            'rgba(62, 192, 193, 1)',
            'rgba(72, 194, 198, 1)',
            'rgba(84, 198, 199, 1)',
            'rgba(97, 202, 205, 1)',
            'rgba(108, 206, 207, 1)',
            'rgba(123, 212, 213, 1)',
            'rgba(134, 214, 217, 1)',
            'rgba(145, 218, 219, 1)',
            'rgba(159, 224, 223, 1)',
            'rgba(170, 228, 228, 1)',
            'rgba(181, 231, 232, 1)',
            'rgba(194, 236, 236, 1)'
          ],
          borderColor: [

          ],
          borderWidth: 0
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <h5 className='mt-5 chart2_header'>Types of Issues that Have a Negative Impact on Relationships (in Percentage)</h5>
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}

export default ChartsPage2;