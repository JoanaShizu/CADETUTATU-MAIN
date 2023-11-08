interface IconProps {
  colorIcon: string;
}
const SVGIconComponent = ({ colorIcon }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0,0,256,256"
      width="40px"
      height="60px"
      fillRule="nonzero">
      <g
        fill={colorIcon}
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none">
        <g transform="scale(5.12,5.12)">
          <path d="M28.292,1.326c-1.066,-0.21 -2.165,-0.326 -3.292,-0.326c-4.71,0 -8.98,1.93 -12.06,5.04l6.92,5.592zM18.595,13.178l-6.975,-5.628c-2.27,2.88 -3.62,6.52 -3.62,10.45c0,2.281 0.452,4.487 1.304,6.534zM22.608,11.432c0.745,-0.273 1.546,-0.432 2.392,-0.432c3.87,0 7,3.13 7,7c0,0.338 -0.032,0.667 -0.078,0.992l7.772,-9.499c-2.058,-3.539 -5.348,-6.268 -9.285,-7.595zM27.341,24.591c-0.733,0.26 -1.519,0.409 -2.341,0.409c-3.87,0 -7,-3.13 -7,-7c0,-0.354 0.034,-0.7 0.084,-1.039l-7.803,9.537c0.386,0.666 0.809,1.315 1.289,1.932c0.37,0.5 0.87,1.14 1.45,1.89c1.267,1.633 2.959,3.816 4.59,6.164zM18.778,38.215c2.082,3.184 3.852,6.497 4.172,9.055c0.14,0.99 0.99,1.73 1.99,1.73c1.02,0 1.87,-0.75 1.99,-1.75c0.61,-4.83 6.57,-12.48 9.78,-16.6c0.56,-0.72 1.05,-1.35 1.5,-1.94c2.44,-3.02 3.79,-6.82 3.79,-10.71c0,-2.322 -0.471,-4.536 -1.319,-6.555z"></path>
        </g>
      </g>
    </svg>
  );
};
export default SVGIconComponent;
