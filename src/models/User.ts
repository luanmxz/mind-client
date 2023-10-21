export interface User {
    id: string;
    email: string;
    username: string; // come from user_metadata
    created_at: string;
    update_at: string;
    user_metadata: {};
    //todo: profile pic and preferences?
}