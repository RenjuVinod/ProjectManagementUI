export class Task {
    id : number ;
    projectID : number | null;
    detail : string;
    status : string;
    assignedToUserID : number | null;
    createdOn : Date ;
}
