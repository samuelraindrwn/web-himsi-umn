export default function ChevronDown({
  isServiceOpen,
}: {
  isServiceOpen: boolean;
}) {
  return (
    <>
      <svg
        className={isServiceOpen ? "active" : ""}
        id="ChevronDown-icon"
        viewBox="0 0 185.344 185.344"
      >
        <g>
          <g>
            <path
              d="M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18
			c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0
			c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z"
            />
          </g>
        </g>
      </svg>
    </>
  );
}
