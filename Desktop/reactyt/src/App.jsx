import React from 'react'

import Card from './components/Card'


const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/055/210/890/small/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn-icons-png.freepik.com/256/121/121144.png?semt=ais_white_label",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.freeiconspng.com/thumbs/amazon-icon/amazon-icon-6.png",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVd-PTRgeQuyEPOVOcfr1QmyH2BnvOkkxkw&s",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCj3HtO9Xpf30OJhy9ZnOlNrvkvBafTzQpw&s",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://png.pngtree.com/element_our/sm/20180627/sm_5b334611860fa.jpg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.shutterstock.com/image-illustration/buenos-aires-argentina-september-12th-260nw-2360714979.jpg",
    companyName: "NVIDIA",
    datePosted: "8 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://pngimg.com/d/tesla_logo_PNG12.png",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/adobe-logo-1.jpg?width=662&height=441&name=adobe-logo-1.jpg",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWPDh6Q0S0q709iwTMfnK4nXzsQJqOtd79g&s",
    companyName: "Salesforce",
    datePosted: "9 days ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  }
];
  
  return (
    <div className='parent'>

  {jobOpenings.map(function(job){
return <Card  company={job.companyName} date={job.datePosted} post={job.post} tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location} brandLogo={job.brandLogo}/>

  }
)
}
    </div>

  )
}

export default App







