import React from "react";

function Experience() {
  return (
    <>
      <div
        name="Experience"
        className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="text-3xl font-bold mb-5 ">Experience</h1>
        <h1 className="text-green-500 font-semibold text-xl">
          Class Representative (CR)
        </h1>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Duration:</span> [1 Year]
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Facilitated communication between students and faculty.</li>
          <li>
            Organized academic and extracurricular activities for the class.
          </li>
          <li>Coordinated study groups to help peers with problem-solving.</li>
          <li>
            Represented the class in faculty meetings and contributed to
            decision-making.
          </li>
        </ul>
        <h1 className="text-green-500 font-semibold text-xl pt-5">
          Teaching Assistant (TA)
        </h1>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Duration:</span> [2 Years]
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Assisted in teaching Mathematics, Science, and Computer Science to
            9th and 10th-grade students.
          </li>
          <li>
            Provided one-on-one support to students for better understanding of
            complex topics.
          </li>
          <li>
            Helped grade assignments and quizzes, giving feedback to aid student
            improvement.
          </li>
          <li>
            Collaborated with the lead teacher to create engaging learning
            activities.
          </li>
          <li>
            Conducted small group tutoring sessions to ensure thorough
            understanding before exams.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
