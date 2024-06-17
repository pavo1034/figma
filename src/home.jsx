const Home = () => {
  return (
    <>
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.EJFeF8RppdSVuYeZUda_sgHaE7&pid=Api&P=0&h=180"
        className="background"
      />
      <div className="layer">
        <div>
          <span
            style={{
              backgroundColor: "white",
              fontSize: "14px",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            👋Welcome to TeamFlow
          </span>
        </div>
        <div
          style={{ fontSize: "1.8em", color: "whitesmoke", fontWeight: "bold" }}
        >
          Work the way that works for you
        </div>
        <div style={{ color: "whitesmoke", fontSize: "1em" }}>
          Create,Build,Collaborate and ship products very faster
        </div>
        <div>
          <span
            style={{
              padding: "8px",
              borderRadius: "4px",
              backgroundColor: "rgb(241, 205, 24)",
              fontWeight: "bold",
            }}
          >
            Get started
          </span>
        </div>
      </div>
      <div style={{width:"100%",
        fontWeight:"bold",
        fontSize:"1em",
        textAlign:"center",
        marginBottom:"30px",
      }}>Our <span style={{color:"rgb(241, 205, 24)"}}>Feature</span></div>
      <div style={{display:"flex",
     
      }}>
        <img src="https://www.changingworkplace.com/wp-content/uploads/2021/07/CWP-infographic-1-768x759-1.png" alt=""
        style={{width:"40%",
            display:"inline",
        }} />
        <span style={{
            width:"25%",
            display:"flex",
            flexDirection:"column",
            gap:"40px",
            textAlign:"center",
            fontWeight:"bold",
            fontSize:"1.5em",
            paddingLeft:"40px",
            marginLeft:"100px",
            marginTop:"80px"
        }}>
         Manage everything in one workspace 
         <span style={{fontSize:"small",fontWeight:"light"}}>Planning, tracking and delivering your team's best work has never been easier. An integrated workspace that's simple to use, TeamFlow lets you spend less time managing your work and more time actually doing it.</span>
       </span>
      </div>
      <div style={{display:"flex",
      }}>
      
        <span style={{
            width:"40%",
            display:"flex",
            flexDirection:"column",
            gap:"40px",
            textAlign:"center",
            fontWeight:"bold",
            fontSize:"1.5em",
            paddingLeft:"40px",
            marginRight:"100px",
            marginTop:"80px"
        }}>
         Set up in minutes 
         <span style={{fontSize:"small",fontWeight:"light"}}>Planning, tracking and delivering your team's best work has never been easier. An integrated workspace that's simple to use, TeamFlow lets you spend less time managing your work and more time actually doing it.</span>
       </span>
       <img src="https://tse3.mm.bing.net/th?id=OIP.fJCmEMouK_LKE5phCE2uXgHaHn&pid=Api&P=0&h=180" alt=""
        style={{width:"25%",
            display:"inline",
        }} />
      </div>
      <div style={{display:"flex",
        flexDirection:"column",
        justifyItems:"center",
        gap:"25px",
        width:"100%"
      }}>
        <div style={{color:"rgb(202, 113, 12)",textAlign:"center"}}>support</div>
<div>  
<div style={{color:"rgb(202, 113, 12)",textAlign:"center",fontWeight:"bold"}}>Subscribe NewSletter & get</div>
<div style={{color:"rgb(202, 113, 12)",textAlign:"center"}}>Company News</div>
</div>
        <div style={{color:"rgb(202, 113, 12)",textAlign:"center"}}><input type="text" placeholder="your email" style={{width:"300px",
            outline:"none",
            height:"30px",
            paddingLeft:"10px"
        }}/><button style={{height:"34px",
            backgroundColor:"#4e46e5",
            border:"none",
            color:"white",
        }}>Subscribe</button></div>
      </div>
    </>
  );
};

export default Home;
