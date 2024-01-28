const Header = (p) => {
  return (
    <div>
      <h1>{p.course.name}</h1>
    </div>
  )
}

const Part = (p) => {
  return (
    <div>
      <p>{p.parts.name}&nbsp; - {p.parts.exercises}</p>
    </div>
  )
}

const Content = (p) => {
  return (
    <div>
      <Part parts={p.parts[0]} />
      <Part parts={p.parts[1]} />
      <Part parts={p.parts[2]} />
    </div>
  )
}

const Total = (p) => {
  return (
    <div>
      <p>Number of exercises = {p.parts[0].exercises + p.parts[1].exercises + p.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using p to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App