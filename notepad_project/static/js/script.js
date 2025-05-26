// function appData() {
//     return {
//       user: null,
//       notes: [],
//       registerData: { username: '', email: '', password: '' },
//       loginData: { username: '', password: '' },
//       newNote: { title: '', content: '' },
//       token: null,
  
//       init() {
//         const savedToken = localStorage.getItem('access_token');
//         if (savedToken) {
//           this.token = savedToken;
//           this.fetchUser();
//           this.fetchNotes();
//         }
      
//       },saveNote(note) {
//         note.editing = false;
//       },
  
//       async register() {
//         // کد ثبت نام
//       },
  
//       async login() {
//         // کد ورود
//       },
  
//       logout() {
//         this.user = null;
//         this.token = null;
//         localStorage.removeItem('access_token');
//         localStorage.removeItem('refresh_token');
//         this.notes = [];
//       },
  
//       async fetchUser() {
//         this.user = { username: 'کاربر' };
//       },
  
//       async fetchNotes() {
//         this.notes = [
//           { id: 1, title: 'عنوان تستی ۱', content: 'محتوای تستی یادداشت اول', editing: false },
//           { id: 2, title: 'عنوان تستی ۲', content: 'محتوای تستی یادداشت دوم', editing: false },
//         ];
//       },
  
//       async addNote(event) {
//         event.preventDefault();
//         if (!this.newNote.title || !this.newNote.content) {
//           alert("لطفاً عنوان و متن یادداشت را وارد کنید");
//           return;

//         const newNoteObj = {
//             id: Date.now(),
//             title: this.newNote.title,
//             content: this.newNote.content,
//             editing: false
//           };
//         }
      
//         const newNoteObj = {
//           id: Date.now(),  // به عنوان id موقت
//           title: this.newNote.title,
//           content: this.newNote.content,
//         };
      
//         this.notes.unshift(newNoteObj);  // اضافه به ابتدای لیست
      
//         // پاک‌کردن فرم
//         this.newNote.title = '';
//         this.newNote.content = '';
//       },
  
//       async deleteNote(id) {
//         if (!confirm('آیا مطمئن هستید که می‌خواهید این یادداشت را حذف کنید؟')) return;
      
//         // درخواست حذف سمت بک‌اند (در مرحله بعد اضافه می‌کنیم)
//         try {
//           const res = await fetch(`/api/notes/${id}/`, {
//             method: 'DELETE',
//             headers: {
//               'Authorization': `Bearer ${this.token}`,
//             },
//           });
      
//           if (res.status === 204) {
//             this.notes = this.notes.filter(note => note.id !== id);
//           } else {
//             alert('حذف یادداشت با مشکل مواجه شد.');
//           }
//         } catch (error) {
//           console.error(error);
//           alert('خطا در حذف یادداشت');
//         }
//       }
      
//     };
//   }

function appData() {
  return {
    user: null,
    notes: [],
    registerData: { username: '', email: '', password: '' },
    loginData: { username: '', password: '' },
    newNote: { title: '', content: '' },
    token: null,

    init() {
      const savedToken = localStorage.getItem('access_token');
      if (savedToken) {
        this.token = savedToken;
        this.fetchUser();
        this.fetchNotes();
      }
    },

    saveNote(note) {
      note.editing = false;
    },

    async register() {
      // کد ثبت نام
    },

    async login() {
      // کد ورود
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      this.notes = [];
    },

    async fetchUser() {
      this.user = { username: 'کاربر' };
    },

    async fetchNotes() {
      this.notes = [
        { id: 1, title: 'عنوان تستی ۱', content: 'محتوای تستی یادداشت اول', editing: false },
        { id: 2, title: 'عنوان تستی ۲', content: 'محتوای تستی یادداشت دوم', editing: false },
      ];
    },

    async addNote(event) {
      event.preventDefault();
      if (!this.newNote.title || !this.newNote.content) {
        alert("لطفاً عنوان و متن یادداشت را وارد کنید");
        return;
      }

      const newNoteObj = {
        id: Date.now(),
        title: this.newNote.title,
        content: this.newNote.content,
        editing: false
      };

      this.notes.unshift(newNoteObj);

      // پاک‌کردن فرم
      this.newNote.title = '';
      this.newNote.content = '';
    },

    async deleteNote(id) {
      if (!confirm('آیا مطمئن هستید که می‌خواهید این یادداشت را حذف کنید؟')) return;
    
      // حذف سمت کلاینت برای تست
      this.notes = this.notes.filter(note => note.id !== id);
    }
  };
}

