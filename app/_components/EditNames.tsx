import editUser from "../EditUser";

const CreateNames = ({ user }: { user: any }) => {
  console.log(user.publicId, "form user");
  return (
    <div>
      <form
        action={(formData) => editUser(formData)}
        className="mt-8 space-y-4"
      >
        <input type="hidden" name="publicId" value={user.publicId} />
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={user.name}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={user.email}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateNames;
