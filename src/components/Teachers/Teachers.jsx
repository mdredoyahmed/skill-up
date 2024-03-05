import React from "react";
import Teacher from "./Teacher";

const Teachers = () => {
  const teachers = [
    {
      teacher_id: "1",
      name: "John Doe",
      title: "Mathematics Instructor",
      image: "https://i.ibb.co/v35Bgkj/t-1.jpg",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      bio: "John Doe is a passionate mathematics instructor with over 10 years of teaching experience. ",
    },
    {
      teacher_id: "2",
      name: "John Doe",
      title: "Mathematics Instructor",
      image: "https://img.freepik.com/free-photo/portrait-female-teacher-holding-notepad-green_140725-149620.jpg",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      bio: "John Doe is a passionate mathematics instructor with over 10 years of teaching experience. ",
    },
    {
      teacher_id: "3",
      name: "John Doe",
      title: "Mathematics Instructor",
      image: "https://as1.ftcdn.net/v2/jpg/04/30/95/28/1000_F_430952869_tbfh8zBFpWIKFGWfjNiOMbLkSwUs6ixq.jpg",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      bio: "John Doe is a passionate mathematics instructor with over 10 years of teaching experience. ",
    },
  ];

  return (
    <div className="my-20 px-5 ">
      <div className=" md:w-2/4 mx-auto" data-aos="fade-right">
        <h1 className="text-center text-4xl font-semibold text-amber-800">
          Our Teachers
        </h1>
        <p className="text-center text-red-600 mt-3">
          “A good teacher isn't someone who gives the answers out to their kids
          but is understanding of needs and challenges and gives tools to help
          other people succeed.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-4">
      {
        teachers.map((teacher)=>(
            <Teacher teacher={teacher}  key={teacher.teacher_id}/>
        ))
      }
    </div>
      

    
    </div>
  );
};

export default Teachers;
