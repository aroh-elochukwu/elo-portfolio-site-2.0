import React from 'react';
import { Descriptions } from 'antd';
import { Avatar } from 'antd';
import eloTVImage from '../../assets/projects-images/elo-tv-view.png'
import budgetTrackerImage from '../../assets/projects-images/budget-tracker.png'
import tictactoeImage from '../../assets/projects-images/tictactoe.png'

const ProjectsPage = () => {
  const projects = [

  ];
  return (
    <div style={{marginLeft:'2em', marginRight:'2em'}}>
      <h2 style={{ textAlign:'center', textTransform:'uppercase', color:'grey'}}>Projects Page</h2>
      <p style={{marginBottom:'2.5em'}}>Please note that all projects are embedded with redirecting links to these projects for your personal observations and viewing pleasure.</p>
      <a href='https://delightful-hamster-f5c8cd.netlify.app/'>
        <Descriptions style={{marginBottom:'3em'}}  bordered title="Elo-TV">
          <Descriptions.Item label="Logo"><img src={eloTVImage}/></Descriptions.Item>        
          <Descriptions.Item label="Built with">React.js</Descriptions.Item>
          <Descriptions.Item label="Build Partners">None</Descriptions.Item>
          <Descriptions.Item label="API Mentions">The Movies Database API</Descriptions.Item>
          <Descriptions.Item label="Project Description">
            An Application displaying the most popular shows on some of the worlds largest streaming site using the movies database API
          </Descriptions.Item>        
        </Descriptions>
      </a>
      <a href='https://moonlit-nasturtium-220cb4.netlify.app/'>
        <Descriptions style={{marginBottom:'3em'}} bordered title="Budget Tracker">
          <Descriptions.Item label="Logo"><img style={{height:'5em'}}  src={budgetTrackerImage}/></Descriptions.Item>        
          <Descriptions.Item label="Built with">React.js</Descriptions.Item>
          <Descriptions.Item label="Build Partners">None</Descriptions.Item>
          <Descriptions.Item label="API Mentions">None</Descriptions.Item>
          <Descriptions.Item label="Project Description">
            An Expense tracker Application 
          </Descriptions.Item>        
        </Descriptions>
      </a>
      <a href=''>
        <Descriptions style={{marginBottom:'3em'}} bordered title="Tic Tac Toe Game">
          <Descriptions.Item label="Logo"><img style={{height:'5em'}} src={tictactoeImage}/></Descriptions.Item>        
          <Descriptions.Item label="Built with">React.js</Descriptions.Item>
          <Descriptions.Item label="Build Partners">None</Descriptions.Item>
          <Descriptions.Item label="API Mentions">None</Descriptions.Item>
          <Descriptions.Item label="Project Description">
            [Application Build in progress] A 2022 Qatar FIFA World cup final themed Tic Tac Toe Game. France vs Argentina as against the usual teams of X and O
          </Descriptions.Item>        
        </Descriptions>
      </a>
      

    </div>

    
    
    );
}
 
export default ProjectsPage;