const express = require('express');
const router = express.Router();

// Get portfolio info
router.get('/portfolio', (req, res) => {
  const portfolioData = {
    name: 'WilsonIIRIP',
    title: 'Full Stack Developer',
    experience: 'Indeterminate',
    github: 'https://github.com/WilsonRIP',
    skills: ['Java', 'Python', 'C++', 'HTML', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    projects: [
      {
        id: 1,
        name: 'Guardian',
        description: 'Guardian AntiCheat Official GitHub Page',
        language: 'Java',
        github: 'https://github.com/WilsonRIP/Guardian'
      },
      {
        id: 2,
        name: 'Verge-Tech-News',
        description: 'A tech news application built with Python',
        language: 'Python',
        github: 'https://github.com/WilsonRIP/Verge-Tech-News'
      }
    ]
  };
  
  res.json(portfolioData);
});

// Submit contact form (mock)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here would normally be code to save to database or send email
  console.log('Contact form submission:', { name, email, message });
  
  // Send back a success response
  res.status(200).json({
    success: true,
    message: 'Message received successfully'
  });
});

module.exports = router; 