const inputEl = document.getElementById("username-inp");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = inputEl.value;
    console.log(name);

    getUserInfo(name)
        .then(data => {
            console.log(data);

            // 1. Hide the shimmer loader
            document.getElementById("loader").style.display = "none";

            // 2. Show the user data section
            const userDataEl = document.getElementById("user-data");
            userDataEl.classList.remove("hidden");

            // 3. Fill in user details
            userDataEl.innerHTML = `
            <div class="flex items-center gap-4">
                <img src="${data.avatar_url}" alt="${data.login}" class="w-16 h-16 rounded-full" />
                <div>
                <h2 class="text-lg font-semibold text-white">${data.login}</h2>
                <p class="text-sm text-gray-400">${data.bio || "No bio available"}</p>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4 text-sm text-gray-300 mt-4">
                <div><strong>Repos:</strong> ${data.public_repos}</div>
                <div><strong>Followers:</strong> ${data.followers}</div>
                <div><strong>Following:</strong> ${data.following}</div>
                <div><strong>Location:</strong> ${data.location || "Not available"}</div>
                <div><strong>Company:</strong> ${data.company || "Not available"}</div>
                <div><strong>Twitter:</strong> ${data.twitter_username || "Not available"}</div>
                <div><strong>Blog:</strong> <a href="${data.blog}" target="_blank" class="text-blue-500">${data.blog || "Not available"}</a></div>
                <div><strong>Created At:</strong> ${new Date(data.created_at).toLocaleDateString()}</div>   
                <div><strong>Updated At:</strong> ${new Date(data.updated_at).toLocaleDateString()}</div>
                <div><strong>GitHub URL:</strong> <a href="${data.html_url}" target="_blank" class="text-blue-500">${data.html_url}</a></div>
                <div><strong>Public Gists:</strong> ${data.public_gists}</div>
                <div><strong>Hireable:</strong> ${data.hireable ? "Yes" : "No"}</div>
            </div>
            `;
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });

        inputEl.value = ""
})

function getUserInfo(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    });
}


// getUserInfo("m-k-yadav")
//   .then(data => {
//     console.log(data);

//     // 1. Hide the shimmer loader
//     document.getElementById("loader").style.display = "none";

//     // 2. Show the user data section
//     const userDataEl = document.getElementById("user-data");
//     userDataEl.classList.remove("hidden");

//     // 3. Fill in user details
//     userDataEl.innerHTML = `
//       <div class="flex items-center gap-4">
//         <img src="${data.avatar_url}" alt="${data.login}" class="w-16 h-16 rounded-full" />
//         <div>
//           <h2 class="text-lg font-semibold text-white">${data.login}</h2>
//           <p class="text-sm text-gray-400">${data.bio || "No bio available"}</p>
//         </div>
//       </div>
//       <div class="grid grid-cols-3 gap-4 text-sm text-gray-300 mt-4">
//         <div><strong>Repos:</strong> ${data.public_repos}</div>
//         <div><strong>Followers:</strong> ${data.followers}</div>
//         <div><strong>Following:</strong> ${data.following}</div>
//         <div><strong>Location:</strong> ${data.location || "Not available"}</div>
//         <div><strong>Company:</strong> ${data.company || "Not available"}</div>
//         <div><strong>Twitter:</strong> ${data.twitter_username || "Not available"}</div>
//         <div><strong>Blog:</strong> <a href="${data.blog}" target="_blank" class="text-blue-500">${data.blog || "Not available"}</a></div>
//         <div><strong>Created At:</strong> ${new Date(data.created_at).toLocaleDateString()}</div>   
//         <div><strong>Updated At:</strong> ${new Date(data.updated_at).toLocaleDateString()}</div>
//         <div><strong>GitHub URL:</strong> <a href="${data.html_url}" target="_blank" class="text-blue-500">${data.html_url}</a></div>
//         <div><strong>Public Gists:</strong> ${data.public_gists}</div>
//         <div><strong>Hireable:</strong> ${data.hireable ? "Yes" : "No"}</div>
//       </div>
//     `;
//   })
//   .catch(error => {
//     console.error("There was a problem with the fetch operation:", error);
//   });
