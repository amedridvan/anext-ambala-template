<div
          className={
            clickedButton == "b1" ||
            clickedButton == "b2" ||
            clickedButton == "a1"
              ? "flex flex-col   w-1/3  "
              : "hidden"
          }
        >
          <Divs name="food1" />
        </div>
        <div
          className={
            clickedButton == "b1" ||
            clickedButton == "b3" ||
            clickedButton == "a1"
              ? "flex flex-col  w-1/3 "
              : "hidden"
          }
        >
          <Divs name="food2" />
        </div>
        <div
          className={
            clickedButton == "b2" ||
            clickedButton == "b4" ||
            clickedButton == "a1"
              ? "flex flex-col w-1/3  "
              : "hidden"
          }
        >
          <Divs name="food3" />
        </div>
        <div
          className={
            clickedButton == "b3" ||
            clickedButton == "b4" ||
            clickedButton == "a1"
              ? "flex flex-col w-1/3"
              : "hidden"
          }
        >
          <Divs name="food4" />
        </div>
        <div
          className={
            clickedButton == "b6" ||
            clickedButton == "b5" ||
            clickedButton == "a1"
              ? "flex flex-col w-1/3 "
              : "hidden"
          }
        >
          <Divs name="food5" />
        </div>
        <div
          className={
            clickedButton == "b5" ||
            clickedButton == "b6" ||
            clickedButton == "a1"
              ? "flex flex-col w-1/3 "
              : "hidden"
          }
        >
          <Divs name="food6" />
        </div>