<div className="relative flex w-full bg-slate-500">
{/* <div className="flex flex-wrap w-full bg-green-400"> */}
  <label
	htmlFor="input"
	className="relative z-1000 text-input bg-blue-300 break-all "
  >
	{task}
  </label>
  <input
	type="text"
	id="input"
	className="flex flex-wrap text-customGray2 border-none outline-none caret-sky-blue text-input text-transparent bg-slate-800"
	placeholder="Type to add new task"
	value={task}
	onKeyUp={handleFormatText}
	onChange={handleInputChange}
	onBlur={() => {
	  if (!handleInputBlur()) {
		setIsEditing(false);
	  }
	}}
	autoFocus
  />
{/* </div> */}
<Avatar
  alt="image"
  src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  sx={{ width: 24, height: 24 }}
  style={{ marginLeft: "10px", marginRight: "10px" }}
/>
</div>