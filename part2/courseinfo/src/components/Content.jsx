import Part from './Part'

const Content = ({parts}) => (
    <div>
      <Part key={parts[0].id} part={parts[0]} />
      <Part key={parts[1].id} part={parts[1]} />
      <Part key={parts[2].id} part={parts[2]} />
    </div>
  )

export default Content