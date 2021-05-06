export class Task {
    id : number ;
    projectID : number | null;
    detail : string;
    status : number | null;
    assignedToUserID : number | null;
    createdOn : Date ;
}
