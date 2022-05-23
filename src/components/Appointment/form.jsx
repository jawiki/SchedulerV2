import React, { useState } from 'react';

const Form = (props) => {
  const {interviewers, onSave, onCancel} = props;
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  return (
    <main className="">
      <section className="">
        <form autoComplete="off">
          <input
            className=""
            name="name"
            type="type"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            onCancel={onCancel}
           /*
              This must be a controlled component
              your code goes here
           */
          />
        </form>
        <interviewerList value={interviewer} onChange={setInterviewer}></interviewerList>
      </section>
      <section className="">
        <section className="">
          <button danger reset onClick={onCancel}>
            Cancel
          </button>
          <button confirm onCLick={onSave}>
            Save
          </button>
        </section>
      </section>
    </main>
  );
};
