export class Team {
   constructor() {
      this.members = new Set();
   }
   add(members) {
      if (this.members.has(members)) {
         throw new Error("Этот участник уже существует в команде");
      } else {
         this.members.add(members);
      }
   }
   addAll(...members) {
      members.forEach((members) => {
         if (this.members.has(members)) {
            throw new Error("Этот участник уже существует в команде");
         } else {
            this.members.add(members);
         }
      });
   }
   toArray() {
      return Array.from(this.members);
   }
}
