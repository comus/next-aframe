export default function Marker ({ src }) {
  return (
    <>
      <div>
        <img src={src} width='400px' />
      </div>
      <style jsx>{`
        @media only screen and (max-width: 600px) {
          div {
            display: none
          }
        }
        div {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1000;
        }
        `}
      </style>
    </>
  )
}
