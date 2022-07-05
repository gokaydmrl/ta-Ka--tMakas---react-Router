import React from "react";

const Algo = () => {
  const list = [
    {
      id: "1",
      name: "Folder 1",
      files: [
        { id: "2", name: "File 1" },
        { id: "3", name: "File 2" },
        { id: "4", name: "File 3" },
        { id: "5", name: "File 4" },
      ],
    },
    {
      id: "6",
      name: "Folder 2",
      files: [{ id: "7", name: "File 5" }],
    },
  ];

  function move(list, targetFolderId) {
    for (var i = 0; i < list.length; i++)
      targetFolderId = list[i].targetFolderId;
    var newFolder = list[targetFolderId];

    console.log("bura", newFolder);
  }
  move(list, 6);

  // const targetFile = list[0].files[2];
  // const targetFolder = list[1].id;

  return (
    <div>
      {" "}
      boş
      {/* <p>{JSON.stringify(targetFile)}</p>
      <p>{JSON.stringify(targetFolder)}</p> */}
    </div>
  );
};

export default Algo;
